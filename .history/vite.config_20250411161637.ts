import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from '@rollup/plugin-babel'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    // babel({
    //   // Babel 配置
    //   babelHelpers: 'bundled', // 必须设置为 'bundled'
    //   configFile: true, // 启用 .babelrc 文件
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 启用内联 JavaScript
      },
    },
  },
})
