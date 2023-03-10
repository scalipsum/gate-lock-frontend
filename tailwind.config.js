module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: '#256D8E',
			darkBlue: '#1F5577',
			black: '#252525',
			white: '#f9f9f9',
			gray1: '#ededed',
			gray2: '#e6e6e6',
			gray3: '#d3d3d3',
			gray4: '#929292',
			gray5: '#6B6B6B',
			gray6: '#313131',
			gray7: '#C1C1C1',
			red: '#db1717',
			green: '#06A934',
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		},
		fontSize: {
			sm: '0.875rem',
			base: '1rem',
			xl: '1.5rem',
			'4xl': '2.5rem',
			'6xl': '4rem',
		},
		maxWidth: {
			container: '1920px',
		},
		extend: {
			boxShadow: {
				container: '0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
			},
			zIndex: {
				100: '100',
				125: '125',
			},
			scale: {
				80: '0.8',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
