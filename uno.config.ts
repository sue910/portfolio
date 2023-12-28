import { defineConfig, presetMini, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetMini(),
  ],
})