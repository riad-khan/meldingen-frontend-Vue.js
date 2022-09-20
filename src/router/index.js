import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from "@/components/Pages/News";
import Login from "@/components/Auth/login";
import Register from "@/components/Auth/Register";
import Contact from "@/components/Contact/Contact";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nieuws',
    name:'nieuws',
    component: News,
  },
  {
    path: '/login',
    name:'login',
    component: Login,
  },
  {
    path: '/register',
    name:'Register',
    component: Register,
  },
  {
    path: '/contact',
    name:'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
