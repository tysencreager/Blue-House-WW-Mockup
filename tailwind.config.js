/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette inspired by Blue House Wood Works' warm-wood + deep-blue aesthetic.
        cream: '#FAF6F0',
        sand: '#F1E7D3',
        wood: {
          light: '#C9A06A',
          DEFAULT: '#8B5A2B',
          dark: '#6B4423',
        },
        ocean: {
          light: '#4A7A96',
          DEFAULT: '#2C5F7F',
          dark: '#1F4A66',
        },
        ink: '#2A1F17',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(42, 31, 23, 0.25)',
      },
    },
  },
  plugins: [],
}
