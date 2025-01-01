import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

import router from "@/router/router.js"

app.use(ElementPlus).use(router).mount('#app')
