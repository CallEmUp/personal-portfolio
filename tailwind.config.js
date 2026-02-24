/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#0f0f0f',
        'card': '#1a1a1a',
        'card-hover': '#222222',
        'border-subtle': '#2a2a2a',
        'accent': '#FFA500',
        'accent-dim': 'rgba(255, 165, 0, 0.15)',
        'text-primary': '#e0e0e0',
        'text-secondary': '#999999',
        'text-muted': '#666666',
      },
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        'content': '1100px',
      },
    },
  },
  plugins: [],
}
