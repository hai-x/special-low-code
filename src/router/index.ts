import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '~/layout/Layout.vue'


const routes = [
    {
        path: '', component: Layout
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router