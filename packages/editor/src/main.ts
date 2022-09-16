import { App as TypeApp, createApp } from 'vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Router from './router'
import { createPinia } from 'pinia'

const Store = createPinia()


import App from './App.vue'

const app = createApp(App)

const mount = (app: TypeApp) => app.mount('#app')

const setup = (app: TypeApp, config: any[]) => {
    config.forEach(i => app.use(i))
}


setup(app, [ElementPlus, Router, Store])

mount(app)