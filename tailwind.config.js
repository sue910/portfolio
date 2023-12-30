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
      zIndex: {
        header: 9999,
        modal: 99,
      },
      animation: {
        vertical: 'up-down 2.4s ease-in-out infinite',
        'vertical-slow': 'up-down 4s ease-in-out infinite',
        'to-up': 'appear-to-up .75s ease-in-out forwards',
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'appear-to-up': {
          '0%': { transform: 'translateY(-70%)', opacity: 0 },
          '100%': { transform: 'translateY(-50%)', opacity: 1 },
        },
      },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    container: {
      width: '100%',
      padding: {
        DEFAULT: '0.625rem',
        sm: '0.625rem',
        md: '1rem',
        lg: '2.25rem',
      },
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
      sm: { max: '767px' },
      md: { min: '768px', max: '1071px' },
      lg: { min: '1072px' },
    },
    borderRadius: {
      DEFAULT: '16px',
      sm: '0.375rem',
      md: '0.75rem',
      lg: '1rem',
      full: '9999px',
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
};
