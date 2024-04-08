/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sofia-pink': '#bf2489',
				'sofia-yellow': '#ffe100',
				'sofia-salmon': '#f5b8a5',
				'sofia-blue': '#82d2cf',
				'sofia-purple': '#bc9afa',
				'sofia-green': '#05f26c',
				'sofia-error': '#DD1805',
				'sofia-success': '#17E788',
			},

			fontFamily: {
				'tilt-neon': ["Tilt Neon Variable", "system-ui"],
				'press-star': ["Press Start 2P", "system-ui"]
			}
		},
	},
	plugins: [],
}
