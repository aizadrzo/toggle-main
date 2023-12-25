/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				sm: '16px',
				md: '24px',
				lg: '32px',
				xl: '40px',
				'2xl': '88px',
				'3xl': '104px',
			},
			container: {
				center: true,
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				lofi: {
					...require("daisyui/src/theming/themes")["lofi"],
				},
			},
		]
	}
}
