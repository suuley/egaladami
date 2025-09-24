// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HTMLCSSView from '../views/HTMLCSSView.vue'
import PythonView from '../views/PythonView.vue'
import JavaScriptView from '../views/JavaScriptView.vue'
import LinuxView from '../views/LinuxView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/htmlcss',
    name: 'htmlcss',
    component: HTMLCSSView
  },
  {
    path: '/python',
    name: 'python',
    component: PythonView
  },
  {
    path: '/javascript',
    name: 'javascript',
    component: JavaScriptView
  },
  {
    path: '/linux',
    name: 'linux',
    component: LinuxView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router // 👈 THIS IS CRITICAL!