### ANNOUNCEMENT
DO NOT MODIFY OR CHANGE THE CODE BEFORE CONFIRMED BY `DOOBOOLAB`. THIS REPOSITORY IS USED IN `DOOBOO-CLI`.

# React Native JS Boilerplate
[![codecov](https://codecov.io/gh/dooboolab/dooboo-native-js/branch/master/graph/badge.svg)](https://codecov.io/gh/dooboolab/dooboo-native-js)
[![CircleCI](https://circleci.com/gh/dooboolab/dooboo-native-js.svg?style=svg)](https://circleci.com/gh/dooboolab/dooboo-native-js)

> Specification
* flow
* react-navigation
* localization
* context-api
* jest with react-test-renderer

> Recently, we removed `mobx` from `js` boilerplate. We didn't, however, make changes in `ts` boilerplate. The reason to remove `mobx` is because we thought that this isn't suitable with what `react` brought up as a design pattern. Today, they are more supportive in `functional-programming` rather than `object-oriented` which has been powered by `react-hook` in `16.8`. Unlike, `js`, `typescript` users are more familiar with `OOP` because `typescript` has mimicked lots of features in `JAVA` and `C++`. We will also make changes to component later with `fp` style when `react@16.8` has landed in `react-native`. Hope you enjoy what we've brought up today as `react native javascript boilerplate`.

# Gain points
```
1. Sample of context-api.
2. Able to learn how to structure react native app with flow, context-api and jest.
3. Test `linting`, `typing`, `jest` with `npm run build` command.
4. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. npm start
```

# Structures
```text
app/
├─ .doobooo // necessary if using dooboo-cli
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│     └─ navigations
│     └─ screen
│     └─ shared
│  └─ contexts
│  └─ utils
│  └─ App.js
├─ test/
├─ .buckconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .flowconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ babel.config.js
├─ index.js
├─ jest.config.js
├─ package.json
├─ README.md
└─ STRINGS.js
```

# Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

## Testing the project
Testing is also just a command away:
```sh
npm test
> jest -u

 PASS  src/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 PASS  lib/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 2 snapshots written.
 PASS  lib/components/screen/__tests__/Home.test.js
 › 2 snapshots written.
 PASS  src/components/shared/__tests__/Button.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 › 4 snapshots updated.
 PASS  lib/components/shared/__tests__/Button.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 4 snapshots written.
 PASS  src/components/screen/__tests__/Intro.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 › 1 snapshot updated.

Snapshot Summary
 › 8 snapshots written from 3 test suites.
 › 5 snapshots updated from 2 test suites.

Test Suites: 6 passed, 6 total
Tests:       14 passed, 14 total
Snapshots:   5 updated, 8 written, 3 passed, 16 total
Time:        5.251s
Ran all test suites.
```

## Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

## Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
We used [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) pacakage for this one.
```
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    LOGIN: 'Login',
  },
  kr: {
    LOGIN: '로그인',
  },
});

export {
  strings,
};
```

Fixed jest setup by adding following in jestSetup.

```
import { NativeModules } from 'react-native';

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.ReactLocalization = {
  language: 'en_US',
};
```

## React version
16.6.3

## React Native version
0.58

## React navigation
3
