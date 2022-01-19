import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '../pages/Layout.vue'

const routes = [
  {
    path: '/',
    component: layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('../pages/index/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/404',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/403',
    component: () => import('../pages/403.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
