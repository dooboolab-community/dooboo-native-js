# React Native JS Boilerplate
> Specification
* flow
* react-navigation
* localization
* mobx
* jest configured with decorator and injector from mobx

# Gain points
```
1. Sample of mobx and data modeling.
2. Able to learn how to structure react native app with mobx and jest and flow.
3. Test type with flow with `npm run build` command.
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
│  └─ models
│  └─ stores
│  └─ utils
│  └─ index.js
├─ test/
├─ .babelrc
├─ .buckconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .flowconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ index.js
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

# Testing the project
Testing is also just a command away:
```sh
npm test
> jest -u

 PASS  lib/components/shared/__tests__/Button.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 4 snapshots written.
 PASS  lib/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 2 snapshots written.
 PASS  src/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 PASS  lib/components/screen/__tests__/Home.test.js
 › 2 snapshots updated.
 PASS  src/components/screen/__tests__/Home.test.js
 PASS  src/components/shared/__tests__/Button.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333


Snapshot Summary
 › 6 snapshots written from 2 test suites.
 › 2 snapshots updated from 1 test suite.

Test Suites: 6 passed, 6 total
Tests:       14 passed, 14 total
Snapshots:   2 updated, 6 written, 8 passed, 16 total
Time:        2.322s
```

# Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

# Localization
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
16.3.1

## React Native version
0.55.4

## React navigation
2.2.0
