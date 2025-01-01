import {createWebHistory, createRouter} from "vue-router";

import indexPage from '@/components/bodys/indexPage.vue'
import jumpLink from '@/components/bodys/jumpLink.vue'
import introduction from '@/components/bodys/introduction.vue'
import reward from "@/components/bodys/rewards/reward.vue";

// rewards
import mathematics from '@/components/bodys/rewards/mathematics.vue'
import chinese from '@/components/bodys/rewards/chinese.vue'
import physics from '@/components/bodys/rewards/physics.vue'
import chemistry from '@/components/bodys/rewards/chemistry.vue'
import biology from '@/components/bodys/rewards/biology.vue'
import informatics from '@/components/bodys/rewards/informatics.vue'

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
                title: '获奖记录',
                activeTitle: '/rewards'
            },
            path: '/rewards/:id', component: reward,
            children: [
                {
                    path: '/rewards/mathematics',
                    component: mathematics
                }, {
                    path: '/rewards/chinese',
                    component: chinese
                }, {
                    path: '/rewards/physics',
                    component: physics
                }, {
                    path: '/rewards/chemistry',
                    component: chemistry
                }, {
                    path: '/rewards/biology',
                    component: biology
                }, {
                    path: '/rewards/informatics',
                    component: informatics
                }
            ]
        }
        ]
    }
)

export default router;