/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      dropShadow: {
        '3xl': '0px 0px 20px  rgba(255,255,255,0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'p_red': '#FE004E',
        'p_back': '#212529',
        'p_grey': '#899FBC',
        'p_dullgrey': '#A3ABB3',
        'white': '#FFFFFF',
        'p_bggrey': '#525252',

      },
    },
  },
  plugins: [],
};
