/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#312C85',
        'primary-light': '#5B55B0',
        'primary-dark': '#1E1A5E',
        text: '#0C0C09',
        muted: '#6B7280',
        subtle: '#9CA3AF',
        surface: '#F4F4F1',
        'surface-alt': '#F9F9F7',
        border: '#E5E7EB',
        'border-light': '#F3F4F6',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
      fontSize: {
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
        heading: ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em', fontWeight: '600' }],
      },
      spacing: {
        section: '6rem',
        container: '72rem',
      },
      maxWidth: {
        container: '72rem',
      },
    },
  },
  plugins: [],
}
