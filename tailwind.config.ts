import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Legacy palette — remove once confirmed nothing else references these
        palette1: '#ff6600',
        palette2: '#000000',
        palette3: '#ff6e00',
        palette4: '#000000',
        palette5: '#ffffff',
        palette6: '#ff6600',

        // Active site palette
        cream: '#F3EDE4',
        ink: '#161513',
        burgundy: {
          DEFAULT: '#6E1E2B',
          light: '#8C2A3A',
        },
      },
    },
  },
  plugins: [],
}
export default config