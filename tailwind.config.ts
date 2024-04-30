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
        palette1: '#4a2427',
        palette2: '#803e2f',
        palette3: '#38322d',
        palette4: '#3e3d38',
        palette5: '#a79986',
        palette6: '#1f1d20',
      }

    },
  },
  plugins: [],
}
export default config
