import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () =>
      import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () =>
      import(/* webpackChunkName: "secret" */ '@/views/Secret.vue'),
    // Check if user is logged in and redirect to secret if not logged in
    beforeEnter(to, from, next) {
      const currentUser = store.state.user.currentUser
      if (currentUser && currentUser.token) next()
      else next('/login')
    }
  },
  {
    // Redirect to Index route if no valid route found
    path: '*',
    redirect: { name: 'Index' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
