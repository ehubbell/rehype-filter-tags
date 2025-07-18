import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runSize } from 'vite-plugin-size';
import { runYalc } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => {
	return {
		base: './',
		build: {
			ssr: true,
			sourcemap: mode === 'development',
			lib: {
				entry: path.resolve(__dirname, 'src/index.ts'),
				formats: ['es', 'cjs'],
				name: 'RehypeFilterTags',
			},
			rollupOptions: {
				external: [],
				plugins: [peerDepsExternal()],
			},
		},
		plugins: [runSize(), runYalc()],
		resolve: {
			alias: {
				src: path.resolve(__dirname, '/src'),
			},
		},
	};
});
