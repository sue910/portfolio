import { defineConfig, presetMini, presetAttributify } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [presetAttributify(), presetMini()],
  // transformers: [transformerDirectives()],
  theme: {
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
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
});
