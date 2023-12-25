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
					"primary": "#7363F3",
					"secondary": "#0C1E1B",
					"accent": '#EF9A63',
					"neutral": "#F3F9F3",
					"base-100": "#FFFFFF",
					"success": "#38B27A",
					"info": "#4255F9",
					"warning": "#FCD554",
					"error": "#EE2626"
				},
			}
		]
	}
}
