const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            ...colors,
            orange: "#000",
            primary: "#ff7500",
            transparent: "transparent",
            current: "currentColor",
        },
        extend: {},
    },
    plugins: [],
};