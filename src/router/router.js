import {createWebHistory, createRouter} from "vue-router";

import indexPage from '@/components/bodys/indexPage.vue'
import jumpLink from '@/components/bodys/jumpLink.vue'
import introduction from '@/components/bodys/introduction.vue'
import thanks from '@/components/bodys/thanks.vue'

const router = createRouter({
        history: createWebHistory(),
        routes: [{
            meta: {
                title: '首页',
                activeTitle: '/'
            },
            path: '/', component: indexPage
        }, {
            meta: {
                title: '连接跳转',
                activeTitle: '/jumpLink'
            },
            path: '/jumpLink', component: jumpLink
        }, {
            meta: {
                title: '首页',
                activeTitle: '/home'
            },
            path: '/home', component: indexPage
        }, {
            meta: {
                title: '学校介绍',
                activeTitle: '/introduction'
            },
            path: '/introduction', component: introduction
        }, {
            meta: {
                title: '鸣谢',
                activeTitle: '/thanks'
            },
            path: '/thanks', component: thanks
        }
        ]
    }
)

export default router;