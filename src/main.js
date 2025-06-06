import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from '@/router.js'


const app = createApp(App)
app.use(router)
app.mount('#app')
