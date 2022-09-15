import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router'
import PaginationComp from './components/Layout/PaginationComp.vue'
const app=createApp(App)
app.use(router)
app.use(store)
app.component('pag__ination',PaginationComp)
app.mount('#app')
