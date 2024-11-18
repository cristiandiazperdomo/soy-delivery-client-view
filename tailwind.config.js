const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            ...colors,
            orange: "#000",
            primary: "#ff7500",
            gray: "#414141",
            lightgray: "#41414105",
            transparent: "transparent",
            current: "currentColor",
        },
        fontFamily: {
            karla: ["Karla"],
            simplysans: ["SimplySans"],
            museo: ["MuseoSansRounded"],
        },
        extend: {},
    },
    plugins: [],
};
