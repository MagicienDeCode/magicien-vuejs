import './assets/main.css'

// Polyfill Buffer for browser environment (needed by gray-matter)
import { Buffer } from 'buffer'
;(globalThis as any).Buffer = Buffer

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(Antd)

app.mount('#app')
