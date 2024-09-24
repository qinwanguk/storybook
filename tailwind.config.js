/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './stories/**/*.{vue,js,ts,jsx,tsx}',  // Include your Storybook stories
        './.storybook/**/*.{js,ts}',  // Storybook configuration
    ],
    theme: {
    extend: {},
    },
    plugins: [],
}

