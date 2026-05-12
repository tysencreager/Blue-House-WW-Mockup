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
        // 'ocean' tokens are kept as class names for backwards compatibility,
        // but the values are now navy blue to match the Ludlow brand.
        ocean: {
          light: '#3A4D85',
          DEFAULT: '#1B2D5B',
          dark: '#0F1F44',
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
      keyframes: {
        heroFadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroZoom: {
          '0%':   { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        heroBounce: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%':      { transform: 'translate(-50%, 8px)' },
        },
      },
    },
  },
  plugins: [],
}
