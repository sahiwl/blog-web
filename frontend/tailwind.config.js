/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      Cormorant: ['Cormorant Variable', 'serif']
    }
  },
  plugins: [],
}

