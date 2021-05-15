import { PluginItem, TransformOptions as ConfigStructure } from '@babel/core';
import { CodeArtifact } from '../CodeArtifact';
import { BROWSER_TARGETS, NATIVE_TARGETS, NODE_SUPPORTED_VERSIONS } from '../constants';
import { FeatureFlags, Format, Platform, Support } from '../types';
import { envExpressionsPlugin } from './plugins/envExpressions';
import { resolve } from './resolve';

// https://babeljs.io/docs/en/babel-preset-env
export interface PresetEnvOptions {
  browserslistEnv?: string;
  bugfixes?: boolean;
  corejs?: 2 | 3 | { version: 2 | 3; proposals: boolean };
  debug?: boolean;
  exclude?: string[];
  forceAllTransforms?: boolean;
  ignoreBrowserslistConfig?: boolean;
  include?: string[];
  loose?: boolean;
  modules?: 'amd' | 'auto' | 'cjs' | 'commonjs' | 'systemjs' | 'umd' | false;
  shippedProposals?: boolean;
  spec?: boolean;
  targets?: Record<string, string[] | string> | string[] | string;
  useBuiltIns?: 'entry' | 'usage' | false;
}

function getPlatformEnvOptions(
  platform: Platform,
  support: Support,
  format: Format,
): PresetEnvOptions {
  let modules: PresetEnvOptions['modules'] = false;

  if (format === 'umd') {
    modules = 'umd';
  } else if (format === 'cjs' || format === 'lib') {
    modules = 'cjs'; // Babel CommonJS
  }

  switch (platform) {
    case 'browser':
      return {
        modules,
        targets: { browsers: BROWSER_TARGETS[support] },
      };

    case 'native':
      return {
        modules,
        targets: { browsers: NATIVE_TARGETS[support] },
      };

    case 'node':
      return {
        // Async/await has been available since v7
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        modules,
        targets: {
          node: NODE_SUPPORTED_VERSIONS[support],
        },
      };

    default:
      throw new Error(`Unknown platform "${platform}".`);
  }
}

function getSharedConfig(
  plugins: PluginItem[],
  presets: PluginItem[],
  features: FeatureFlags,
): ConfigStructure {
  return {
    caller: {
      name: 'packemon',
    },
    comments: true,
    parserOpts: {
      sourceType: 'unambiguous',
      strictMode: features.strict,
    },
    plugins,
    presets,
    // Do NOT load root `babel.config.js` as we need full control
    configFile: false,
    // Do load branch `.babelrc.js` files for granular customization
    babelrc: true,
    babelrcRoots: features.workspaces,
  };
}

// The input config should only parse special syntax, not transform and downlevel.
// This applies to all formats within a build target.
export function getBabelInputConfig(
  artifact: CodeArtifact,
  features: FeatureFlags,
): Omit<ConfigStructure, 'exclude' | 'include'> {
  const plugins: PluginItem[] = [];
  const presets: PluginItem[] = [];

  if (features.flow) {
    presets.push([resolve('@babel/preset-flow'), { allowDeclareFields: true }]);
  }

  if (features.typescript) {
    presets.push([resolve('@babel/preset-typescript'), { allowDeclareFields: true }]);

    // When decorators are used, class properties must be loose
    if (features.decorators) {
      plugins.push(
        [resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
        [resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
        [resolve('@babel/plugin-proposal-private-methods'), { loose: true }],
      );

      if (artifact.package.hasDependency('@babel/plugin-proposal-private-property-in-object')) {
        plugins.push([
          resolve('@babel/plugin-proposal-private-property-in-object'),
          { loose: true },
        ]);
      }
    }
  }

  if (features.react) {
    presets.push([
      resolve('@babel/preset-react'),
      {
        development: __DEV__,
        throwIfNamespace: true,
      },
    ]);
  }

  return getSharedConfig(plugins, presets, features);
}

// The output config does all the transformation and downleveling through the preset-env.
// This is handled per output since we need to configure based on target + format combinations.
export function getBabelOutputConfig(
  platform: Platform,
  support: Support,
  format: Format,
  features: FeatureFlags,
): ConfigStructure {
  const plugins: PluginItem[] = [];
  const presets: PluginItem[] = [];

  // ENVIRONMENT

  const envOptions: PresetEnvOptions = {
    // Prefer speed and smaller filesize in prod
    spec: __DEV__,
    loose: __PROD__,
    // Consumers must polyfill accordingly
    useBuiltIns: false,
    // Transform features accordingly
    bugfixes: true,
    shippedProposals: true,
    // Platform specific
    ...getPlatformEnvOptions(platform, support, format),
  };

  presets.push([resolve('@babel/preset-env'), envOptions]);

  // PLUGINS

  // Use `Object.assign` when available
  // https://babeljs.io/docs/en/babel-plugin-transform-destructuring#usebuiltins
  if (support === 'current' || support === 'experimental') {
    plugins.push(
      [resolve('@babel/plugin-transform-destructuring'), { useBuiltIns: true }],
      [resolve('@babel/plugin-proposal-object-rest-spread'), { useBuiltIns: true }],
    );
  }

  if ((platform === 'browser' || platform === 'native') && support !== 'experimental') {
    plugins.push(
      // Transform async/await into Promises
      [resolve('babel-plugin-transform-async-to-promises'), { inlineHelpers: true, target: 'es5' }],

      // Transform generators to Regenerator
      [
        resolve('@babel/plugin-transform-runtime'),
        { helpers: false, regenerator: true, useESModules: format === 'esm' },
      ],
    );
  }

  // Support env expression shortcuts
  plugins.push(envExpressionsPlugin());

  return getSharedConfig(plugins, presets, features);
}
