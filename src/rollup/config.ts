import { ModuleFormat, OutputOptions, RollupOptions } from 'rollup';
import externals from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import visualizer from 'rollup-plugin-visualizer';
import { getBabelInputPlugin, getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { getBabelInputConfig, getBabelOutputConfig } from '../babel/config';
import type { BundleArtifact } from '../BundleArtifact';
import { EXCLUDE, EXTENSIONS } from '../constants';
import { BundleBuild, FeatureFlags, Format } from '../types';

const sharedPlugins = [
  resolve({ extensions: EXTENSIONS, preferBuiltins: true }),
  commonjs(),
  json({ compact: true, namedExports: false }),
];

function getRollupModuleFormat(format: Format): ModuleFormat {
  if (
    format === 'esm' ||
    format === 'mjs' ||
    // UMD needs to be compiled with Babel instead of Rollup,
    // so we use ESM for better interoperability.
    format === 'umd'
  ) {
    return 'esm';
  }

  return 'cjs';
}

function getSiblingArtifacts(artifact: BundleArtifact): BundleArtifact[] {
  return artifact.package.artifacts.filter((bundle) => {
    if (bundle === artifact) {
      return false;
    }

    // Don't include non-bundle artifacts. We also can't use `instanceof`
    // because of circular dependencies, boo!
    return 'configGroup' in bundle;
  }) as BundleArtifact[];
}

function getRollupPaths(artifact: BundleArtifact, ext: string): Record<string, string> {
  const paths: Record<string, string> = {};

  getSiblingArtifacts(artifact).forEach((bundle) => {
    if (bundle.configGroup === artifact.configGroup) {
      // All output files are in the same directory, so we can hard-code a relative path
      paths[bundle.getInputPath().path()] = `./${bundle.outputName}.${ext}`;
    }
  });

  return paths;
}

export function getRollupExternals(artifact: BundleArtifact) {
  const siblingInputs = new Set<string>();
  const foreignInputs = new Set<string>();

  getSiblingArtifacts(artifact).forEach((bundle) => {
    const inputPath = bundle.getInputPath().path();

    if (bundle.configGroup === artifact.configGroup) {
      siblingInputs.add(inputPath);
    } else {
      foreignInputs.add(inputPath);
    }
  });

  return (id: string, parent: string = '<unknown>') => {
    if (siblingInputs.has(id)) {
      return true;
    }

    if (foreignInputs.has(id)) {
      throw new Error(
        `Unexpected foreign input import. May only import sibling files within the same \`inputs\` configuration group. File "${parent}" attempted to import "${id}".`,
      );
    }

    return false;
  };
}

export function getRollupOutputConfig(
  artifact: BundleArtifact,
  features: FeatureFlags,
  build: BundleBuild,
): OutputOptions {
  const { format, platform, support } = build;
  const name = artifact.outputName;
  const { ext, folder } = artifact.getOutputMetadata(format);
  const isTest = process.env.NODE_ENV === 'test';

  const output: OutputOptions = {
    dir: artifact.package.path.append(folder).path(),
    format: getRollupModuleFormat(format),
    originalFormat: format,
    // Map our externals to local paths with trailing extension
    paths: getRollupPaths(artifact, ext),
    // Use our extension for file names
    assetFileNames: '../assets/[name]-[hash][extname]',
    chunkFileNames: !isTest ? `[name]-[hash].${ext}` : `${name}-[hash].${ext}`,
    entryFileNames: !isTest ? `[name].${ext}` : `${name}.${ext}`,
    // Use const when not supporting new targets
    preferConst: support === 'current' || support === 'experimental',
    // Output specific plugins
    plugins: [
      getBabelOutputPlugin({
        ...getBabelOutputConfig(build, features),
        filename: artifact.package.path.path(),
        // Provide a custom name for the UMD global
        moduleId: format === 'umd' ? artifact.namespace : undefined,
        // Maps are extracted above before transformation
        sourceMaps: false,
      }),
    ],
    // Always include source maps
    sourcemap: true,
    sourcemapExcludeSources: true,
  };

  // Disable warnings about default exports
  if (format === 'lib' || format === 'cjs') {
    output.exports = 'auto';
  }

  // Automatically prepend a shebang for binaries
  output.banner = artifact.outputName === 'bin' ? '#!/usr/bin/env node\n\n' : '';

  output.banner += [
    '// Generated with Packemon: https://packemon.dev\n',
    `// Platform: ${platform}, Support: ${support}, Format: ${format}\n\n`,
  ].join('');

  return output;
}

export function getRollupConfig(artifact: BundleArtifact, features: FeatureFlags): RollupOptions {
  const inputPath = artifact.getInputPath();
  const packagePath = artifact.package.packageJsonPath.path();
  const isNode = artifact.platform === 'node';

  const config: RollupOptions = {
    cache: artifact.cache,
    external: getRollupExternals(artifact),
    input: inputPath.path(),
    output: [],
    // Shared output plugins
    plugins: [
      // Mark all dependencies in `package.json` as external
      externals({
        builtins: isNode,
        deps: true,
        devDeps: true,
        optDeps: true,
        packagePath,
        peerDeps: true,
      }),
      // Externals MUST be listed before shared plugins
      ...sharedPlugins,
      // Declare Babel here so we can parse TypeScript/Flow
      getBabelInputPlugin({
        ...getBabelInputConfig(artifact, features),
        babelHelpers: 'bundled',
        exclude: process.env.NODE_ENV === 'test' ? [] : EXCLUDE,
        extensions: EXTENSIONS,
        filename: artifact.package.path.path(),
        // Extract maps from the original source
        sourceMaps: true,
      }),
    ],
    // Treeshake for smaller builds
    treeshake: true,
  };

  // Polyfill node modules when platform is not node
  if (!isNode) {
    // @ts-expect-error Types dont match
    config.plugins!.unshift(nodePolyfills());
  }

  // Analyze the bundle for debugging purposes
  if (features.analyze) {
    config.plugins!.push(
      visualizer({
        filename: artifact.getStatsFileName(),
        gzipSize: true,
        open: true,
        sourcemap: true,
        template: features.analyze as 'treemap',
        title: artifact.getStatsTitle(),
      }),
    );
  }

  // Add an output for each format
  config.output = artifact.builds.map((build) => getRollupOutputConfig(artifact, features, build));

  return config;
}
