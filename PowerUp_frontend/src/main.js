import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './Pages/Main/HomeView.vue'
import LogInView from './Pages/Main/LogInView.vue'
import SignUpView from './Pages/Main/SignUpView.vue'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Import Global Styles
import './styles/global.css'

const routes = [
  { path: '/', component: HomeView },
  {path: '/login', component: LogInView},
  {path: '/signup', component: SignUpView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
