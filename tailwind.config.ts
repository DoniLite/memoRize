/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,tsx,ts,vue}',
    './components/**/*.{html,js,tsx,ts,vue}',
    './layouts/**/*.{html,js,tsx,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
};

