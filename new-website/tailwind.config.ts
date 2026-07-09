import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '0px',
      none: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
    extend: {
      colors: {
        green: '#1e3526',
        orange: '#ff6400',
        cream: '#e7e6d2',
        neutral: {
          lightest: '#eeeeee',
          lighter: '#cccccc',
          light: '#aaaaaa',
          mid: '#666666',
          dark: '#444444',
          darker: '#222222',
        },
      },
      fontFamily: {
        sans: ['var(--font-aeonik-new)', 'Arial', 'sans-serif'],
        heading: ['var(--font-editorsnote)', 'Georgia', 'serif'],
        display: ['var(--font-editorsnote)', 'Georgia', 'serif'],
        ui: ['var(--font-aeonik)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 7vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h1': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'prose-wide': '75ch',
        'prose-narrow': '60ch',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
