# Overview
 A yalc plugin for Vite-based library projects.

## Prerequisites
- Node
- Yalc

## Installation
```
npm i vite-plugin-yalc -D
```

## Usage
To push your build into the store, simply add the following:
```ts
// vite.config.ts

import path from 'path';
import { defineConfig } from 'vite';
import { runYalc } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Project',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`,
			},
		},
		plugins: [runYalc()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});

```

Or, to run a command abd then push your build into the store do the following:

```ts
// vite.config.ts

import path from 'path';
import { defineConfig } from 'vite';
import { runCommand } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				name: 'Yalc',
				formats: ['es', 'cjs'],
				fileName: format => `index.${format}.js`,
			},
		},
		plugins: [runCommand('npm run build:ts')],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});


```

## Development
This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add vite-plugin-yalc
- After that, this library will hot reload into the consuming application

## Scripts
- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky
- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author
- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com
