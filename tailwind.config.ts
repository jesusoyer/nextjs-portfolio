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
        palette1: '#ff6600', //intro 
        palette2: '#000000',
        palette3: '#ff6e00',
        palette4: '#000000', //navbar
        palette5: '#ffffff', //font
        palette6: '#ff6600',
      }

    },
  },
  plugins: [],
}
export default config
