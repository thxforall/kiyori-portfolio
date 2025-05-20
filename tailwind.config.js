// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kiyori: {
          background: '#FDFDFD',
          text: '#1A1A1A',
          subtle: '#666666',
          // Dark mode colors
          dark: {
            background: '#121212',
            text: '#F5F5F5',
            secondary: '#999999',
          }
        },
      },
    },
  },
  plugins: [],
};