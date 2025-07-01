## Overview

This library contains suitable configurations for various projects.
It's designed to simplify and standardize your project setup for less boilerplate and faster development.

## Installation

```
npm i @playbooks/configs --save-dev
npm install
```

## ESLint Usage

Add one of the following to your `package.json` file:

```json
  "eslintConfig": { "extends": "./node_modules/@playbooks/configs/src/eslint-config-node.js" },
  "eslintConfig": { "extends": "./node_modules/@playbooks/configs/src/eslint-config-web.js" },
```

## Prettier Usage

Add the following to your `package.json` file:

```json
  "prettier": "@playbooks/configs/prettier-config",
```

## TSConfig Usage

Create a `tsconfig.json` file and add one of the following:

```json
{
	"extends": "@playbooks/configs/tsconfig-web",
	"include": ["src"],
	"exclude": ["node_modules"]
}
```

```json
{
	"extends": "@playbooks/configs/tsconfig-node",
	"include": ["src"],
	"exclude": ["node_modules"]
}
```

## Issues

- eslint v9 doesn't allow nested `extends`
- this means we need to import each one separately
- eslint v9 also doesn't allow placement in package.json
- module.exports >> export default
- https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package

## Links

- https://archive.eslint.org/docs/developer-guide/shareable-configs
- https://prettier.io/docs/sharing-configurations
- https://www.typescriptlang.org/tsconfig/#extends
- https://dev.to/saiful7778/how-to-create-a-reusable-typescript-config-package-in-turborepo-3nh
