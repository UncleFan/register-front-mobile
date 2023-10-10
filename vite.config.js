import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75, // 设计稿尺寸 1rem大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: [".van"], // 过滤掉van-开头的class，不进行rem转换
          replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
          exclude: "/node_modules", // 忽略包文件转换rem
        })
      ]
    }
  }
})
