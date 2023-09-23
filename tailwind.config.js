/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      animation: {
        bouncer: 'bouncer 2s ease-in-out infinite', // Include your animation here
      },
      keyframes: {
        bouncer: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      dropShadow: {
        '3xl': '0px 0px 20px rgba(255,255,255,0.1)',
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
