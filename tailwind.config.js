/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Jakarta: ['Jakarta', 'sans-serif'],
				JakartaBold: ['Jakarta-Bold', 'sans-serif'],
				JakartaExtraBold: ['Jakarta-ExtraBold', 'sans-serif'],
				JakartaExtraLight: ['Jakarta-ExtraLight', 'sans-serif'],
				JakartaLight: ['Jakarta-Light', 'sans-serif'],
				JakartaMedium: ['Jakarta-Medium', 'sans-serif'],
				JakartaSemiBold: ['Jakarta-SemiBold', 'sans-serif'],
			},
			colors: {
				bgprimary: {
					50: '#fef7ee',
					100: '#feedd6',
					200: '#fbd1a2', // P
					300: '#f9b978',
					400: '#f59242',
					500: '#f2721d',
					600: '#e35813',
					700: '#bc4212',
					800: '#963516',
					900: '#792e15',
					950: '#411509',
				},
				bgsecondary: {
					50: '#fff6ed',
					100: '#feead6',
					200: '#fcd1ac',
					300: '#f9b078',
					400: '#f79256', // P
					500: '#f3631c',
					600: '#e44a12',
					700: '#bd3611',
					800: '#962c16',
					900: '#792615',
					950: '#411109',
				},
				primary: {
					50: '#f2f7fd',
					100: '#e5edf9',
					200: '#c5daf2',
					300: '#92bce7',
					400: '#5798d9',
					500: '#327cc5',
					600: '#2260a7',
					700: '#1d4e89', // P
					800: '#1b4271',
					900: '#1c395e',
					950: '#13253e',
				},
				secondary: {
					50: '#f7f5ef',
					100: '#ebe5d6',
					200: '#d8ccb0',
					300: '#c2ad82',
					400: '#af9160',
					500: '#a08052',
					600: '#896745',
					700: '#72523b', // P
					800: '#5e4435',
					900: '#523b31',
					950: '#2e201a',
				},
				success: {
					100: '#F0FFF4',
					200: '#C6F6D5',
					300: '#9AE6B4',
					400: '#68D391',
					500: '#38A169',
					600: '#2F855A',
					700: '#276749',
					800: '#22543D',
					900: '#1C4532',
				},
				danger: {
					100: '#FFF5F5',
					200: '#FED7D7',
					300: '#FEB2B2',
					400: '#FC8181',
					500: '#F56565',
					600: '#E53E3E',
					700: '#C53030',
					800: '#9B2C2C',
					900: '#742A2A',
				},
				warning: {
					100: '#FFFBEB',
					200: '#FEF3C7',
					300: '#FDE68A',
					400: '#FACC15',
					500: '#EAB308',
					600: '#CA8A04',
					700: '#A16207',
					800: '#854D0E',
					900: '#713F12',
				},
				general: {
					100: '#CED1DD',
					200: '#858585',
					300: '#EEEEEE',
					400: '#0CC25F',
					500: '#F6F8FA',
					600: '#E6F3FF',
					700: '#EBEBEB',
					800: '#ADADAD',
				},
			},
		},
	},
	plugins: [],
}
