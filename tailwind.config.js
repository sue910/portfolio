/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        wrap: '1000px',
      },
      maxWidth: {
        wrap: '1000px',
      },
      backgroundImage: ({ theme }) => ({
        'gradient-primary': `linear-gradient(120deg, ${theme(
          'colors.primary',
        )} 50.5%, ${theme('colors.sub')})`,
      }),
      boxShadow: {
        header: `0px 0px 12px 0px rgba(0, 0, 0, 0.05)`,
      },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    container: {
      padding: '10px',
    },
    colors: {
      primary: '#4D5DEB',
      sub: '#9DA8E8',
      black: '#000000',
      white: '#FFFFFF',
      t1: '#1B1B1B',
      t2: '#3B3B3B',
      t3: '#5D5D5F',
      t4: '#81838D',
      t5: '#9EA5AC',
      'default-bg-color': '#f8f8f8',
      'default-border': 'rgb(0 0 0, 0.08)',
      'footer-bg-color': '#393B42',
    },
    screens: {
      sm: { min: '576px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px' },
    },
  },
  plugins: [],
};
