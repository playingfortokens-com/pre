/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
	},

	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				pft: {
					primary: '#395466',
					secondary: '#395466',
					accent: '#fbc337',
					neutral: '#414558',
					'base-100': '#213744',
					info: '#8be8fd',
					success: '#52fa7c',
					warning: '#f1fa89',
					error: '#ff5757',
				},
			},
		],
	},
};

module.exports = config;
