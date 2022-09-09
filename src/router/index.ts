import { createRouter, createWebHistory } from 'vue-router'

import Layout from '~/layout/Layout.vue'


const routes = [
    {
        path: '', component: Layout
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router