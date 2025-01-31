# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### 0.2.1 - 2021-08-28

#### 📘 Docs

- Add API integration. ([2afcdd9](https://github.com/milesj/packemon/commit/2afcdd9))
- Add ESM first docs. ([aa99b27](https://github.com/milesj/packemon/commit/aa99b27))

**Note:** Version bump only for package website





## 0.2.0 - 2021-08-02

#### 🚀 Updates

- Support a new `externals` option. (#80) ([c935e35](https://github.com/milesj/packemon/commit/c935e35)), closes [#80](https://github.com/milesj/packemon/issues/80)

#### 📘 Docs

- **[docusaurus]** Update to beta.4. ([b8cb57b](https://github.com/milesj/packemon/commit/b8cb57b))

**Note:** Version bump only for package website





# 0.1.0 - 2021-07-17

#### 💥 Breaking

- Make chokidar an optional dependency. ([8163c44](https://github.com/milesj/packemon/commit/8163c44))
- Move source maps to a config setting. (#28) ([fe58536](https://github.com/milesj/packemon/commit/fe58536)), closes [#28](https://github.com/milesj/packemon/issues/28)
- Rename generateDeclaration to declaration. ([e1eaeb1](https://github.com/milesj/packemon/commit/e1eaeb1))
- Rework how the `bundle` option works. (#55) ([7ba924a](https://github.com/milesj/packemon/commit/7ba924a)), closes [#55](https://github.com/milesj/packemon/issues/55)
- Rework local babel config. Support branch overrides. ([b82577e](https://github.com/milesj/packemon/commit/b82577e))
- Support ECMAScript as default formats. (#69) ([0d0d450](https://github.com/milesj/packemon/commit/0d0d450)), closes [#69](https://github.com/milesj/packemon/issues/69)

#### 🚀 Updates

- Add `--filterFormats` option. (#45) ([4fc2d14](https://github.com/milesj/packemon/commit/4fc2d14)), closes [#45](https://github.com/milesj/packemon/issues/45)
- Add `--filterPackages` option. (#44) ([27ea45a](https://github.com/milesj/packemon/commit/27ea45a)), closes [#44](https://github.com/milesj/packemon/issues/44)
- Add `--filterPlatforms` option. (#46) ([22a7b09](https://github.com/milesj/packemon/commit/22a7b09)), closes [#46](https://github.com/milesj/packemon/issues/46)
- Add `init` command. (#13) ([e309171](https://github.com/milesj/packemon/commit/e309171)), closes [#13](https://github.com/milesj/packemon/issues/13)
- Add `native` platform to support React Native. (#16) ([b36a332](https://github.com/milesj/packemon/commit/b36a332)), closes [#16](https://github.com/milesj/packemon/issues/16)
- Add `pack` command. (#10) ([31508cc](https://github.com/milesj/packemon/commit/31508cc)), closes [#10](https://github.com/milesj/packemon/issues/10)
- Add `validate` command. (#8) ([7155b20](https://github.com/milesj/packemon/commit/7155b20)), closes [#8](https://github.com/milesj/packemon/issues/8)
- Add `watch` command. (#11) ([16f297e](https://github.com/milesj/packemon/commit/16f297e)), closes [#11](https://github.com/milesj/packemon/issues/11)
- Add Babel plugin for handling invariant() functions. (#78) ([98485ce](https://github.com/milesj/packemon/commit/98485ce)), closes [#78](https://github.com/milesj/packemon/issues/78)
- Add custom Babel plugin to transform environment expressions. (#17) ([f9f03bd](https://github.com/milesj/packemon/commit/f9f03bd)), closes [#17](https://github.com/milesj/packemon/issues/17)
- Add engines version constraint. ([549ee48](https://github.com/milesj/packemon/commit/549ee48))
- Add validate `files` option to verify distributable files. (#33) ([b700162](https://github.com/milesj/packemon/commit/b700162)), closes [#33](https://github.com/milesj/packemon/issues/33)
- Allow JSON files to be imported. (#34) ([f7db2d1](https://github.com/milesj/packemon/commit/f7db2d1)), closes [#34](https://github.com/milesj/packemon/issues/34)
- Always generate source maps. (#32) ([d254ae6](https://github.com/milesj/packemon/commit/d254ae6)), closes [#32](https://github.com/milesj/packemon/issues/32)
- Always run in production mode. ([78a6ff9](https://github.com/milesj/packemon/commit/78a6ff9))
- Polyfill node modules for other platforms. (#26) ([89f8294](https://github.com/milesj/packemon/commit/89f8294)), closes [#26](https://github.com/milesj/packemon/issues/26)
- Rework automatic entry points and exports. (#27) ([3391d3c](https://github.com/milesj/packemon/commit/3391d3c)), closes [#27](https://github.com/milesj/packemon/issues/27)
- Rework code bundling. (#59) ([64c0097](https://github.com/milesj/packemon/commit/64c0097)), closes [#59](https://github.com/milesj/packemon/issues/59)
- Support a `bundle` config option. (#38) ([bb4844e](https://github.com/milesj/packemon/commit/bb4844e)), closes [#38](https://github.com/milesj/packemon/issues/38)
- Support different declaration type outputs. (#9) ([3e44964](https://github.com/milesj/packemon/commit/3e44964)), closes [#9](https://github.com/milesj/packemon/issues/9)
- Support generators for old browser targets. (#22) ([131deb3](https://github.com/milesj/packemon/commit/131deb3)), closes [#22](https://github.com/milesj/packemon/issues/22)
- Support multiple configurations per package. (#6) ([8b534e2](https://github.com/milesj/packemon/commit/8b534e2)), closes [#6](https://github.com/milesj/packemon/issues/6)
- Update experimental target to Node v16. (#52) ([ffb5812](https://github.com/milesj/packemon/commit/ffb5812)), closes [#52](https://github.com/milesj/packemon/issues/52)

#### 🐞 Fixes

- Bring back `lib` as a browser default format. (#72) ([f707ccb](https://github.com/milesj/packemon/commit/f707ccb)), closes [#72](https://github.com/milesj/packemon/issues/72)
- Fix shared lib issues. ([3b3baba](https://github.com/milesj/packemon/commit/3b3baba))

#### 🔑 Security

- bump dns-packet from 1.3.1 to 1.3.4 in /website (#63) ([c9b0307](https://github.com/milesj/packemon/commit/c9b0307)), closes [#63](https://github.com/milesj/packemon/issues/63)
- Bump elliptic from 6.5.3 to 6.5.4 in /website (#40) ([15349a9](https://github.com/milesj/packemon/commit/15349a9)), closes [#40](https://github.com/milesj/packemon/issues/40)
- Bump ini from 1.3.5 to 1.3.8 in /website (#12) ([66b4a5c](https://github.com/milesj/packemon/commit/66b4a5c)), closes [#12](https://github.com/milesj/packemon/issues/12)
- bump lodash from 4.17.20 to 4.17.21 in /website (#56) ([c2aa165](https://github.com/milesj/packemon/commit/c2aa165)), closes [#56](https://github.com/milesj/packemon/issues/56)
- bump normalize-url from 4.5.0 to 4.5.1 in /website (#70) ([96ffbc1](https://github.com/milesj/packemon/commit/96ffbc1)), closes [#70](https://github.com/milesj/packemon/issues/70)
- Bump prismjs from 1.23.0 to 1.24.1 in /website (#74) ([ecba5f9](https://github.com/milesj/packemon/commit/ecba5f9)), closes [#74](https://github.com/milesj/packemon/issues/74)
- bump ssri from 6.0.1 to 6.0.2 in /website (#49) ([ad3a837](https://github.com/milesj/packemon/commit/ad3a837)), closes [#49](https://github.com/milesj/packemon/issues/49)
- bump ua-parser-js from 0.7.22 to 0.7.28 in /website (#54) ([d93bde3](https://github.com/milesj/packemon/commit/d93bde3)), closes [#54](https://github.com/milesj/packemon/issues/54)
- bump url-parse from 1.4.7 to 1.5.1 in /website (#57) ([7e09acf](https://github.com/milesj/packemon/commit/7e09acf)), closes [#57](https://github.com/milesj/packemon/issues/57)
- bump ws from 6.2.1 to 6.2.2 in /website (#65) ([db03fe4](https://github.com/milesj/packemon/commit/db03fe4)), closes [#65](https://github.com/milesj/packemon/issues/65)
- bump y18n from 4.0.0 to 4.0.3 in /website (#50) ([e43259c](https://github.com/milesj/packemon/commit/e43259c)), closes [#50](https://github.com/milesj/packemon/issues/50)

#### 🎨 Styles

- Switch to tabs from spaces. (#66) ([15c1ee6](https://github.com/milesj/packemon/commit/15c1ee6)), closes [#66](https://github.com/milesj/packemon/issues/66)

#### 📦 Dependencies

- Update doc dependencies. ([505648d](https://github.com/milesj/packemon/commit/505648d))

#### 📘 Docs

- Add auto-deploy for Docusaurus. (#30) ([70a8f53](https://github.com/milesj/packemon/commit/70a8f53)), closes [#30](https://github.com/milesj/packemon/issues/30)
- Add babel config section. ([33fb3d9](https://github.com/milesj/packemon/commit/33fb3d9))
- Add clean command. ([8793fd1](https://github.com/milesj/packemon/commit/8793fd1))
- Add pack docs. ([9173b27](https://github.com/milesj/packemon/commit/9173b27))
- Add version to header. ([6ee39cc](https://github.com/milesj/packemon/commit/6ee39cc))
- Enable algolia search. ([5edfee5](https://github.com/milesj/packemon/commit/5edfee5))
- Fix version extraction. ([6a0401d](https://github.com/milesj/packemon/commit/6a0401d))
- Improve examples. ([c9cd99f](https://github.com/milesj/packemon/commit/c9cd99f))
- Integrate new website. (#5) ([351be8d](https://github.com/milesj/packemon/commit/351be8d)), closes [#5](https://github.com/milesj/packemon/issues/5)
- Rename solorepo to polyrepo. ([176346c](https://github.com/milesj/packemon/commit/176346c))
- Update index features. ([9134e7e](https://github.com/milesj/packemon/commit/9134e7e))
- Update website. ([dd1775c](https://github.com/milesj/packemon/commit/dd1775c))

#### 🛠 Internals

- Add tests and increase code coverage. (#18) ([a7520ea](https://github.com/milesj/packemon/commit/a7520ea)), closes [#18](https://github.com/milesj/packemon/issues/18)
- Rename filter options. (#47) ([ec918eb](https://github.com/milesj/packemon/commit/ec918eb)), closes [#47](https://github.com/milesj/packemon/issues/47)
- Rework file cleanup layer. ([7e7f4dd](https://github.com/milesj/packemon/commit/7e7f4dd))
- Switch to @beemo/dev for developer tooling. (#51) ([7def806](https://github.com/milesj/packemon/commit/7def806)), closes [#51](https://github.com/milesj/packemon/issues/51)
- Switch to a monorepo. (#76) ([37f4c1d](https://github.com/milesj/packemon/commit/37f4c1d)), closes [#76](https://github.com/milesj/packemon/issues/76)

**Note:** Version bump only for package website
