import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from '@rollup/plugin-babel'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    resolve: {
      alias: {
        'ant-design-vue/lib': 'ant-design-vue/es', // 将 lib 替换为 es
      },
    },
    babel({
      // Babel 配置
      babelHelpers: 'bundled', // 必须设置为 'bundled'
      configFile: true, // 启用 .babelrc 文件
    }),
  ],
})
