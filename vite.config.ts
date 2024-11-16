import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
      build: {
        outDir: './public'
      },
	plugins: [UnoCSS(), sveltekit()]
};

export default config;
