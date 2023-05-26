/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
}

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx,html}",
		"./public/**/*.{vue,js,ts,jsx,tsx,html}",
		"./src/components/**/*.{vue,js,ts,jsx,tsx,html}",
	],
	theme: {
		screens: {
			xs: "350px",
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				navImage: "url('./src/assets/images/banner/banner-image45.png')",
			},
			colors: {
				primary: withOpacity("--primary"),
				secondary: withOpacity("--secondary"),
				main: withOpacity("--main"),
				background: withOpacity("--background"),
				header: withOpacity("--header"),
				accent: withOpacity("--accent"),
			},
			animation: {
				blob: "blob 9s infinite",
				wiggle: "wiggle 1s ease-in-out infinite",
				scroll: "scroll ease-in 1.5s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				scroll: {
					"0%": { transform: "translateY(0)" },
					"30%": { transform: "translateY(100px)" },
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	// daisyUI config
	daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	},
};
