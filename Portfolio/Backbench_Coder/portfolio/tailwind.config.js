module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'kaushan': ["Kaushan Script"],
      'poppins': [ 'Poppins'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT:'#00F260'
       }
      },
    },
  },
  plugins: [],
};