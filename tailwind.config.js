/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vanilla: {
          50: '#FFFFFF',
          100: '#FFFDF9', // Warm Vanilla Cream background
          200: '#FDF7EE',
          300: '#F8EFE0',
          400: '#EFE2CC',
        },
        macaron: {
          pink: '#FF9B9B',       // Strawberry Macaron
          strawberry: '#FF8080',
          rose: '#E8B4B8',       // Rose Syrup
          mint: '#88D8B0',       // Mint Gelato
          lavender: '#C3AED6',   // Lavender Macaron
          pistachio: '#A8DADC',  // Pistachio Cream
          honey: '#F9D56E',      // Honey Comb
        },
        chocolate: {
          50: '#F9F7F5',
          100: '#F2EEEB',
          200: '#DFD5CD',
          300: '#C2B1A5',
          400: '#8D7B74',
          600: '#56453D',
          700: '#3D302A',
          800: '#2D231E',        // Dark Chocolate primary text
          900: '#1A1411',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(45, 35, 30, 0.05)',
        'glass-hover': '0 16px 40px -8px rgba(45, 35, 30, 0.1)',
        'glow-pink': '0 10px 30px -5px rgba(255, 155, 155, 0.35)',
        'glow-mint': '0 10px 30px -5px rgba(136, 216, 176, 0.35)',
        'glow-rose': '0 10px 30px -5px rgba(232, 180, 184, 0.35)',
        'inner-soft': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
