/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,tsx,ts,vue}',
    './components/**/*.{html,js,tsx,ts,vue}',
    './layouts/**/*.{html,js,tsx,ts,vue}',
  ],
  safelist: [
    'text-left', 'text-right', 'mb-2', 'text-gray-800', 'border-l-4', 'border-gray-400',
    'pl-4', 'italic', 'text-gray-600', 'text-4xl', 'font-bold', 'text-gray-900',
    'text-3xl', 'font-semibold', 'text-gray-800', 'text-2xl', 'text-gray-700',
    'text-xl', 'text-gray-700', 'text-lg', 'text-gray-600', 'text-base', 'text-gray-500',
    'list-disc', 'ml-4', 'list-decimal', 'pl-5', 'mb-1', 'line-through', 'text-gray-500',
    'text-blue-500', 'font-semibold', 'rounded-lg', 'shadow-md', 'max-w-full',
    'text-blue-600', 'underline', 'hover:text-blue-800', 'font-bold', 'bg-gray-200',
    'px-1', 'rounded', 'text-sm', 'font-mono', 'italic', 'line-through', 'text-xs',
    'align-sub', 'align-super', 'underline line-through', 'bg-gray-900', 'text-white',
    'p-3', 'rounded-md', 'overflow-auto', 'text-purple-400', 'text-yellow-400',
    'text-blue-500', 'text-green-400', 'text-gray-400', 'text-green-300', 'text-orange-400',
    'text-yellow-300', 'text-gray-500', 'text-red-500', 'text-pink-500', 'text-blue-400'
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
  daisyui: {
    themes: [],
  },
};

