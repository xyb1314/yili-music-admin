import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '../pages/Layout.vue'
export const menuRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: { title: '控制台', icon: 'dashboard' },
    component: () => import('../pages/dashboard/index.vue')
  },
  {
    path: 'user',
    name: 'User',
    meta: { title: '用户管理', icon: 'manage_accounts' },
    component: () => import('../pages/user/index.vue')
  }
]

const routes = [
  {
    path: '/',
    component: layout,
    redirect: 'dashboard',
    children: menuRoutes
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
