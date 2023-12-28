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
    },
    container: {
      padding: '10px',
    },
    colors: {
      primary: '#4D5DEB',
      black: '#000000',
      white: '#FFFFFF',
      t1: '#1B1B1B',
      t2: '#3B3B3B',
      t3: '#5D5D5F',
      t4: '#81838D',
      t5: '#9EA5AC',
      defaultBorder: 'hsl(0 0 0, 0.08)',
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
};
