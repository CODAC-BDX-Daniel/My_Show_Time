import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../components/registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/user.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/EventDetails/:id',
    name: 'EventDetails',
    props: true,
    component: () => import('../views/EventDetails.vue')
  },
  {
    path: '/UpdateEvent/:id',
    name: 'UpdateEvent',
    props: true,
    component: () => import('../views/UpdateEvent.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

export default router
