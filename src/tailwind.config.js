/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",     // root files like razorpay.html
    "./src/**/*.{html,js}", // all files inside src
  ],
  theme: {
    extend: {
      backgroundSize: {
        'full-w': '100% auto',
      },
    },
  },
  plugins: [],
}
