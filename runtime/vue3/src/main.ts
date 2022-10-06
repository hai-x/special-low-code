import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

document.domain = "127.0.0.1";

const runtimeApp = createApp(App)

// @ts-ignore
runtimeApp.use(ElementPlus)


runtimeApp.mount('#app')


