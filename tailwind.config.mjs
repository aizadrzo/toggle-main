/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		spacing: {
			sm: '16px',
			md: '24px',
			lg: '32px',
			xl: '40px',
			'2xl': '88px',
			'3xl': '104px',
		},
		extend: {
			container: {
				center: true,
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: { themes: ['black'] }
}
