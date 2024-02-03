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
            //
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
                progress: 'progress 10s linear',
            },
            keyframes: {
                progress: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
            },
            backgroundImage: {
                'hero-carousel':
                    'linear-gradient(to bottom,#0000 min(40vh,50%),#000 100%),linear-gradient(to right,#000c 0,#0009 30%,#0000 70%)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
