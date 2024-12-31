import { createWebHistory, createRouter} from "vue-router";

import indexPage from '@/components/bodys/indexPage.vue'
import jumpLink from '@/components/bodys/jumpLink.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        meta: {
            title: '首页',
            activeTitle: '/'
        },
        path: '/',component:indexPage
    },{
        meta: {
            title: '连接跳转',
            activeTitle: '/jumpLink'
        },
        path: '/jumpLink',component:jumpLink
    }
    ]
    }
)

export default router;