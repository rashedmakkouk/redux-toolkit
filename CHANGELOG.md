# Changelog

## 0.6.0 (2022-10-28)

### Bug Fixes

- chore: Fix `ActionCreators` and `ActionReducers` typings
  - Fix 'resetReducer' ActionCreator Return Type
  - Rename `RemoveRecordsBy` interface to `RemoveRecordsByKey`
  - Unify ActionCreators interface and arguments typings

### Features

- feat: Bump package version from `0.6.6` to `0.6.7`

## 0.6.0 (2022-10-24)

### Changes

- chore: Upgrade package dependencies --latest
- chore: Upgrade Yarn from `3.2.0` to `3.2.4`

### Features

- feat: Bump package version from `0.6.5` to `0.6.6`
  - Update package CHANGELOG.md

## 0.6.0 (2021-06-08)

### Changed

- chore: Update package license to `BSD 3-Clause License`

### Features

- feat: Bump package version from `0.6.4` to `0.6.5`
- feat: Bump package version from `0.6.3` to `0.6.4`
- feat: Bump package version from `0.6.2` to `0.6.3`

## 0.6.0 (2022-06-08)

### Features

- feat: Bump package version from `0.6.1` to `0.6.2`

### Fixed

- fix: Update method usage instructions in `README.md`
  - Fix `removeRecordsByKey` Example
  - Fix broken links

## 0.6.0 (2022-06-06)

### Features

- feat: Bump package version from `0.6.0` to `0.6.1`

## 0.5.0 (2022-06-06)

### Changed

- chore: Update methods usage and code comment
  - Update `appendRecords`
  - Update `removeProps`
  - Update `resetReducer`
  - Update `setProps`
  - Update `updatePropsByKey`
  - Update `updateProps`
  - Update `appendRecords`
  - Update `removeProps`
  - Update `resetReducer`
- chore: Rename `removeRecordsBy` method to `removeRecordsByKey`
  - Update Action Creator
  - Update Action Reducer
  - Update Action Type
  - Update usage and code comment

### Documentation

- docs: Update method usage instructions in `README.md`

### Features

- feat: Bump package version from `0.5.0` to `0.6.0`
- feat: Update package dependencies
- feat: Add `purge` support to `resetStore` Action Creator

### Fixes

- fix: Update Action Reducers typings

## 0.5.0 (2022-05-25)

### Changes

- chore: Remove package namespace declaration
- chore: Move publish `access` configuration to `package.json`

## 0.4.0 (2022-05-17)

### Features

- feat: Bump package version from `0.4.7` to `0.5.0`
  - Upgrade package dependencies --latest
  - Update package `LICENSE` to `MIT`
  - Update package visibility to `public`
  - Add GitHub action configuration file
  - Refactor `build` script
  - Rename package

## 0.4.0 (2022-05-08)

### Features

- feat: Bump package version from `0.4.6` to `0.4.7`
  - Update package changelog
  - Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.4.0 (2022-05-07)

### Features

- chore: Upgrade package dependencies

## 0.4.0 (2022-04-16)

### Features

- feat: Bump package version from `0.4.5` to `0.4.6`
  - Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.4.0 (2022-01-23)

### Features

- feat: Bump package version from `0.4.4` to `0.4.5`
  - Upgrade package dependencies --latest

## 0.4.0 (2021-09-18)

### Features

- feat: Bump package version from `0.4.3` to `0.4.4`
  - Upgrade package dependencies --latest

## 0.4.0 (2021-08-30)

### Features

- feat: Bump package version from `0.4.2` to `0.4.3`
  - Upgrade package dependencies --latest

## 0.4.0 (2021-08-22)

### Features

- feat: Bump package version from `0.4.1` to `0.4.2`
- chore: Upgrade package dependencies --latest

## 0.4.0 (2021-08-15)

### Features

- feat: Bump package version from `0.4.0` to `0.4.1`
- chore: Upgrade package dependencies --latest

## 0.4.0 (2021-07-17)

### Features

- chore: Upgrade package dependencies --latest

## 0.3.0 (2021-06-28)

### Changes

- chore: Migrate changelog version files to root `CHANGELOG.md`
  - Remove `docs` directory in favor of `README.md` file

### Features

- feat: Bump package version from `0.3.0` to `0.4.0`
- chore: Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.3.0 (2021-04-29)

### Features

- chore: Upgrade package dependencies --latest

## 0.3.0 (2021-03-16)

### Features

- chore: Upgrade package dependencies --latest

## 0.3.0 (2021-01-30)

### Changes

- chore: Update type definitions root file
- feat: Migrate build script to standalone `scripts`
- chore: Upgrade Yarn from `v1` to `v2`
- chore: Update package config files

## 0.3.0 (2020-12-20)

### Features

- feat: Bump package version to `0.5.1`
- chore: Upgrade package dependencies --latest

## 0.2.0 (2020-10-10)

### Changes

- chore: Add single entry point function that returns `folder` specific helpers
- chore: Extract `actionCreators` & `actionReducers` each to own module
- chore: Rename `actionTypes` constants to use naming convention

### Deprecated

- chore: Remove multiple explicit action creators in favor of universal helpers

## 0.2.0 (2020-10-06)

### Features

- chore: Upgrade package dependencies --latest

## 0.2.0 (2020-10-04)

### Changes

- chore: Add `repository` property to `package.json`
- chore: Update package configuration files
- chore: Update local build scripts

## 0.1.0 (2020-09-30)

### Changes

- chore: Separate between compile & build workflows
- chore: Package will live inside `build/dist` directory

## 0.1.0 (2020-09-24)

### Features

- chore: Module files naming convention
- chore: Package configuration files & external import references

## 0.1.0 (2020-09-20)

### Bug Fixes

- fix: `setProps` to overwrite data instead of update

### Changes

- chore: Extend config files from `*.base.*`
- chore: Update `docs/versions` folder structure

### Features

- feat: Add `updateById` helper to handle normalized payloads

## 0.1.0 (2020-09-18)

### Changes

- chore: Install `eslint-config` package, update configuration files
- chore: Package dependencies & references, configuration file, docs
