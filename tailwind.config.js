/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f0a1e',
        'bg-secondary': '#1a1129',
        'bg-tertiary': '#251a33',
        'text-primary': '#f5f3ff',
        'text-secondary': '#b8b0d0',
        'accent-primary': '#ff6b35',
        'accent-secondary': '#a855f7',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        body: ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
