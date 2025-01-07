import '@/assets/base.css'

import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

import router from "@/router/router.js"

import store from 'store'

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn.js';

// highlightjs
import hljs from 'highlight.js';


VMdPreview.use(githubTheme, {
    Hljs: hljs,
});


VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

VMdEditor.use(createKatexPlugin())
VMdPreview.use(createKatexPlugin())

import axios from "axios";

axios.defaults.baseURL

app.use(ElementPlus).use(router).use(store).use(VMdEditor).use(VMdPreview).mount('#app')
