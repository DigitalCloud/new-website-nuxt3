/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`
    ],
    theme: {
        extend: {},
        screens: {
            '3xl': {'max': '1600px'},
            '2xl': {'max': '1400px'},
            'xl': {'max': '1280px'},
            'lg': {'max': '991px'},
            'md': {'max': '767px'},
            'sm': {'max': '576px'},
            'xs': {'max': '375px'},
            'xxs': {'max': '340px'},
        },
        colors: {
            transparent: 'transparent',
            blue: {
                600: '#0029BF',
                500: '#2B59FF',
                300: '#1B7BB9',
                100: '#EBF5F5',
            },
            gray: {
                300: '#F1F1F1',
                200: '#F5F5F5',
                100: '#F4F4F4',
            },
            orange: {
                700: '#FF6739',
                200: '#FFE3E1',
            },
            white: {
                900: '#ffffff',
            },
            purple: {
                800: '#7B4099',
                300: '#EDD6FA',
                200: '#F5E3FF',
                100: '#FEF0FE',
            },
            black: {
                900: '#000000',
                800: '#232323',
                700: '#2A2F31',
                600: '#1E2532',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
