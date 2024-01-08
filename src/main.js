import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import { i18n } from './i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./pages/index.vue'), meta: { title: i18n.t('greeting') } },
    { path: '/about', component: () => import('./pages/about.vue') },
  ],
})

createApp(App)
  .use(router)
  .mount('#app')
