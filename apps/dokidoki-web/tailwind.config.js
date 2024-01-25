const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-rubik)', ...fontFamily.sans],
            },
            colors: {
                background: 'var(--background)',
                font: {
                    DEFAULT: 'var(--font)',
                    hover: 'var(--font-hover)',
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    hover: 'var(--primary-hover)',
                    active: 'var(--primary-active)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    hover: 'var(--secondary-hover)',
                    active: 'var(--secondary-active)',
                },
                canvas: {
                    DEFAULT: 'var(--canvas)',
                },
                span: {
                    DEFAULT: 'var(--span)',
                },
            },
            animation: {
                progress: 'progress 8s linear forwards',
            },
            keyframes: {
                progress: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
