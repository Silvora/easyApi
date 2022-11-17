import { createApp } from 'vue'
import App from '@/App.vue'
import router from "./router"
import "./styles/style.css"

import 'ant-design-vue/dist/antd.css';

import {createPinia} from "pinia"

import "jsoneditor";

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import JsonEditorVue from 'json-editor-vue3'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import json from "highlight.js/lib/languages/json"
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('json', json);
const app = createApp(App)



app.use(createPinia()).use(JsonEditorVue).use(hljsVuePlugin).use(VXETable).use(router).mount('#app')
