/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
  background: 'var(--color-bg)',
  text: 'var(--color-text)',
  muted: 'var(--color-muted)',
  border: 'var(--color-border)',

  primary: 'var(--color-primary)',
  accent: 'var(--color-accent)',
},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}