/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{ts,svelte,js,html}'],
	theme: {
		extend: {},
		container: {
			center: true
		}
	},
	plugins: [],
	safelist: [
		{
			pattern: /(border|shadow)-(red|green|blue|orange|purple|yellow)-300/, // You can display all the colors that you need
			variants: ['hover'],      // Optional
		},
	],
};
