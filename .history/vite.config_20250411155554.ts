import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  babel({
    // Babel 配置
    babelHelpers: 'bundled', // 必须设置为 'bundled'
    configFile: true, // 启用 .babelrc 文件
  }),
})
