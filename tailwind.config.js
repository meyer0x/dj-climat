/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#000",
				foreground: "#FFF",
				orange: "rgb(251, 129, 81)",
				yellow: "rgb(255, 236, 32)",
				cyan: "rgb(45, 217, 200)",
			},
		},
	},
	plugins: [],
};
