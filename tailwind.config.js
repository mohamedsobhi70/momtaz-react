
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '16px',
        },
      },
      fontFamily: {
        Readex: ['Readex Pro', 'sans-serif'],
        Tajawal: ['Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'btn-primary-shadow': '0px 0px 0px 6px rgba(230, 230, 234, 1)',
        'btn-secondary-shadow': '0px 0px 0px 6px rgba(250, 248, 254, 1)',
        'btn-tertiary-shadow': '0px 0px 0px 6px rgba(242, 251, 213, 1)',
        'btn-error-shadow': '0px 0px 0px 6px rgba(255, 230, 213, 1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('daisyui'),
  ],
};