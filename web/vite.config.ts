import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
//gzip压缩
import viteCompression from "vite-plugin-compression"
//cdn加速
import {Plugin as importToCDN} from "vite-plugin-cdn-import"

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// function __dirname(__dirname: any, arg1: string): string {
//   throw new Error('Function not implemented.')
// }

import {visualizer} from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    // importToCDN({
    //   modules:[
    //     {
    //       name:"vue",
    //       var:"Vue",
    //       path:"https://cdn.jsdelivr.net/npm/vue@3.2.41/dist/vue.global.min.js"
    //     },
    //     {
    //       name:"axios",
    //       var:"axios",
    //       path:"https://cdn.jsdelivr.net/npm/axios@1.1.3/dist/axios.min.js"
    //     },
    //     // {
    //     //   name:"ant-design-vue",
    //     //   var:"AntDesignVue",
    //     //   path:"https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.13/lib/index.min.js",
    //     //   css:"https://cdn.jsdelivr.net/npm/ant-design-vue@3.2.13/dist/antd.css"
    //     // },
    //     {
    //       name:"js-md5",
    //       var:"md5",
    //       path:"https://cdn.jsdelivr.net/npm/js-md5@0.7.3/src/md5.min.js"
    //     },
    //     {
    //       name:"json-editor-vue3",
    //       var:"JsonEditor",
    //       path:"https://cdn.jsdelivr.net/npm/json-editor-vue3@1.0.6/lib/index.min.js"
    //     },
    //     {
    //       name:"mockjs",
    //       var:"Mock",
    //       path:"https://cdn.jsdelivr.net/npm/mockjs@1.1.0/dist/mock.min.js"
    //     },
    //     {
    //       name:"vue-router",
    //       var:"VueRouter",
    //       path:"https://cdn.jsdelivr.net/npm/vue-router@4.1.6/dist/vue-router.global.min.js"
    //     },
    //     // {
    //     //   name:"vxe-table",
    //     //   var:"VxeTable",
    //     //   path:"https://cdn.jsdelivr.net/npm/vxe-table@4.3.5/lib/index.umd.min.js",
    //     //   css:"https://cdn.jsdelivr.net/npm/vxe-table@4.3.5/lib/style.min.css"
    //     // },
    //     // {
    //     //   name:"xe-utils",
    //     //   var:"XeUtils",
    //     //   path:"https://cdn.jsdelivr.net/npm/xe-utils@3.5.7/dist/xe-utils.umd.min.js"
    //     // },
    //     // {
    //     //   name:"highlight.js",
    //     //   var:"Highlight",
    //     //   path:"https://cdn.jsdelivr.net/npm/highlight.js@11.6.0/lib/index.min.js",
    //     //   css:"https://cdn.jsdelivr.net/npm/highlight.js@11.6.0/styles/atom-one-dark.css"
    //     // },
    //     // {
    //     //   name:"@highlightjs/vue-plugin",
    //     //   var:"hljsVuePlugin",
    //     //   path:"https://cdn.jsdelivr.net/npm/@highlightjs/vue-plugin@2.1.0/dist/highlightjs-vue.min.js"
    //     // },
    //     // {
    //     //   name:"pinia",
    //     //   var:"Pinia",
    //     //   path:"https://cdn.jsdelivr.net/npm/pinia@2.0.23/dist/pinia.iife.min.js"
    //     // },
    //     // {
    //     //   name:"path",
    //     //   var:"path",  
    //     //   path:"https://cdn.jsdelivr.net/npm/path@0.12.7/path.min.js"
    //     // }
    //   ]
    // }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    visualizer({open:true})
  ],
  resolve:{
    alias:{'@': path.resolve(__dirname, 'src')}
    //alias:{'@': '../src'}
  },
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       additionalData: '@import "@/styles/global.scss"'
  //     }
  //   }
  // },
  // "server":{
  //   "proxy":{
  //     "/api":{
  //       target:"http://127.0.0.1:55667/api",
  //       changeOrigin:true
  //     }
  //   }
  // },
  "build":{
    "rollupOptions":{
      "output":{
        //分包
        // "manualChunks":(id:string)=>{
        //   if(id.includes("node_modules")){
        //     return "vendor"
        //   }
        // }
      }
    }
  }
})


