/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			animation:{
				["infinite-slider"]: "infiniteSlider 20s linear infinite",
			},
			keyframes:{
				infiniteSlider: {
					"0%": { transform: "translateX(0)" },
					"100%": {
						transform: "translateX(calc(-250px * 5))",
					},
				}
			},
			colors: {
				'border-color': '#d0d5dd',
			},
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
					"primary": "#1053F3",
					"secondary": "#E7EEFE",
					"accent": "#20232A",
					"neutral": "#fcfcfd",
					"base-100": "#FFFFFF",
				},
			}
		]
	}
}
