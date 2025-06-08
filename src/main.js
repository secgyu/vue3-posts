import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalDirective from './plugins/global-directive'
import dayjsPlugin from './plugins/dayjs'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(globalDirective)
app.use(dayjsPlugin)
app.use(router)
app.use(createPinia())
app.mount('#app')
