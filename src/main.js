import '@/assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

import router from "@/router/router.js"

import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import store from 'store'

app.use(ElementPlus).use(router).use(MavonEditor).use(store).mount('#app')
