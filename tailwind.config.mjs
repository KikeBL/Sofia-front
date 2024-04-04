/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'sofia-purple': '#BD2CBF',
				'sofia-pink': '#BF2489',
				'sofia-yellow': '#ffe100',
				'sofia-blue': '#0B438C',
				'sofia-error': '#DD1805',
				'sofia-success': '#17E788',
			},

			fontFamily: {
				'tilt-neon': ['Tilt Neon Variable', 'system-ui']
			}
		},
	},
	plugins: [],
}
