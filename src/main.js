import { createApp } from 'vue'
import router  from './router'
import App from './App.vue'

// Remove .use(router) if App.vue is the root
const app = createApp(App)
app.use(router)
app.mount('#app')