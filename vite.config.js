// vite.config.js
import vue from '@vitejs/plugin-vue'
import postcss from 'rollup-plugin-postcss'

export default {
  plugins: [
    vue(),
    postcss() // Configura tus opciones de PostCSS aquí si es necesario
  ]
}
