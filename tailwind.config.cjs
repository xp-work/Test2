/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        minHeight: {
            '1/2': '50%',  
        },
        extend: {},
    },
    plugins: [],
    important: false,
    corePlugins: {
        preflight: false,
    },
};
