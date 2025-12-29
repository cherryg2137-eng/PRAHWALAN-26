/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#050505',
                    glass: 'rgba(255, 255, 255, 0.05)',
                },
                indigo: {
                    900: '#1a1a2e',
                },
                purple: {
                    DEFAULT: '#7b2cbf',
                    glow: '#9d4edo',
                },
                magenta: {
                    DEFAULT: '#f72585',
                },
                cyan: {
                    DEFAULT: '#4cc9f0',
                    glow: '#72efdd',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif'],
            },
            boxShadow: {
                'neon-cyan': '0 0 10px #4cc9f0, 0 0 20px #4cc9f0',
                'neon-purple': '0 0 10px #7b2cbf, 0 0 20px #7b2cbf',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
