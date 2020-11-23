import Vue from 'vue'
import VueRouter from 'vue-router'
const Register = () => import('../views/Register.vue')
const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const User = () => import('../views/User.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login, name: 'login' },
  { path: '/', component: Index, name: 'index' },
  { path: '/user', component: User, name: 'user' }
]

const router = new VueRouter({
  routes
})

export default router
