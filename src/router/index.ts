import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personagens',
      name: 'people',
      component: HomeView
    },
    {
      path: '/planetas',
      name: 'planets',
      component: HomeView
    },
    {
      path: '/especies',
      name: 'species',
      component: HomeView
    },

  ]
})

export default router
