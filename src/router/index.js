import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from "@/components/Pages/News";
import Login from "@/components/Auth/login";
import Register from "@/components/Auth/Register";
import Contact from "@/components/Contact/Contact";
import PartnerBlogs from "@/components/Blogs/PartnerBlogs";
import PartnerBlogDetails from "@/components/Blogs/PartnerBlogDetails";
import Blog from "@/components/Blogs/Blog";
import BlogDetails from "@/components/Blogs/BlogDetails";
import FilteredBlogs from "@/components/Blogs/FilteredBlogs";
import NewsDetails from "@/components/Pages/NewsDetails";



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
    path: '/nieuws/:regio/:provincie/:slug/:id',
    name:'NewsDetails',
    component: NewsDetails,
  },
  {
    path: '/login',
    name:'login',
    component: Login,
  },
  {
    path: '/register',
    name:'register',
    component: Register,
  },
  {
    path: '/contact',
    name:'contact',
    component: Contact,
  },
  {
    path:'/partnerbijdrage',
    name:'partner-blogs',
    component: PartnerBlogs,
  },
  {
    path:'/partnerbijdrage/:slug/:id',
    name:'partner-blogs-details',
    component: PartnerBlogDetails,
  },
  {
    path: '/blogs',
    name:'blogs',
    component: Blog,
  },
  {
    path:'/blogs/category/:slug/:id',
    name:'filtered-blogs',
    component: FilteredBlogs,
  },
  {
    path: '/blogs/:slug/:id',
    name:'blog-details',
    component: BlogDetails,

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
