/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#377DFF',
          'primary-content': '#ffffff',
          secondary: '#38CB89',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-content': '#163835',
          neutral: '#3d4451',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F8F9FA',
          'base-300': '#F2F4F7',
          'base-content': '#323B4B',
          error: '#FF3737',
          warning: '#FAB005',
          info: '#38D9A9',
          debug: '#4C6EF5',
        },
      },
    ],
  },
};
