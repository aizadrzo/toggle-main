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
				black: {
					...require("daisyui/src/theming/themes")["black"],
					primary: '#F5F3EE',
					secondary: '#1D1D1D',
					accent: '#8678f9',
				},
			},
		]
	}
}
