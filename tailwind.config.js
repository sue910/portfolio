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
        'gradient-white-tp':
          'linear-gradient(to left, #FFF, rgba(255, 255, 255, 0) 100%)',
        'gradient-thumb':
          'linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, rgba(0, 0, 0, 0.08) 100%)',
        dots: "url('/images/main/dot.svg')",
      }),
      boxShadow: {
        header: '0px 0px 12px 0px rgba(0, 0, 0, 0.05)',
        card: '0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 4px 10px -2px rgba(0, 0, 0, 0.05), 0px 0px 2px 0px rgba(0, 0, 0, 0.05)',
        close:
          '0px 4px 10px -2px rgba(0, 0, 0, 0.05), 0px 0px 2px 0px rgba(0, 0, 0, 0.05)',
      },
      zIndex: {
        header: 9999,
        modal: 99,
      },
      animation: {
        move: 'up-down 2.4s ease-in-out infinite',
        'move-slow': 'up-down 4s ease-in-out .4s infinite',
        'to-up-1': 'appear-to-up .4s ease-in-out .25s forwards',
        'to-up-2': 'appear-to-up .4s ease-in-out .85s forwards',
        grow: 'increase .75s ease-in-out 1.45s forwards',
        'to-up-3': 'appear-to-up .4s ease-in-out 2.2s forwards',
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'appear-to-up': {
          '0%': { transform: 'translateY(60px)' },
          '100%': { transform: 'translateY(0)' },
        },
        increase: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      fontSize: {
        'sm-2': '15px',
      },
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    container: {
      width: '100%',
      padding: {
        DEFAULT: '0.75rem',
        sm: '0.75rem',
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
      'default-bg-color': '#f7f8f8',
      'light-gray': '#F1F2F4',
      'default-border': 'rgba(0, 0, 0, 0.08)',
      backdrop: 'rgba(0, 0, 0, 0.3)',
      'footer-bg-color': '#393B42',
      tag: 'rgba(77, 93, 235, 0.12)',
      'temp-header': 'rgba(255, 255, 255, 0.3)',
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
