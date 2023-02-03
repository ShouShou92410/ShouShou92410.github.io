/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				purple: {
					50: '#E6E6FF',
					100: '#C1C1E6',
					200: '#A0A0CC',
					300: '#8282B3',
					400: '#676799',
					500: '#4E4E80',
					600: '#393966',
					700: '#26264D',
					800: '#171733',
					900: '#0A0A1A'
				},
				primary: '#ff6666'
			}
		}
	},
	plugins: []
};
