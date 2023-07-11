/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			md: "780px",
			lg: "1150px",
		},
		extend: {},
	},
	plugins: [],
};
