/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.no-scrollbar': {
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          },
        },
        { variants: ['responsive'] }
      );
    },
  ],
};

// import { defineConfig } from 'vite'; import tailwindcss from '@tailwindcss/vite'; import tailwindcssNoScrollbar from 'tailwindcss-no-scrollbar'; export default defineConfig({ plugins: [tailwindcss(), tailwindcssNoScrollbar()], });
