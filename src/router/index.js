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
import Statistics from "@/components/Statistics/Statistics";
import FilteredNews from "@/components/Pages/FilteredNews";
import Meldingen from "@/components/Meldingen/Meldingen";
import MeldingenDetails from "@/components/Meldingen/MeldingenDetails";
import FilterMeldingen from "@/components/Meldingen/FilterMeldingen";
import Dashboard from "@/components/Dashboard/Dashboard";
import EditProfile from "@/components/Dashboard/Edit-Profile";



const routes = [
  {
    path: '/',
    name: 'meldingen',
    component: Meldingen
  },
  {
      path: '/:provincie/:stad/:straat/:category/:id',
      name:'MeldingenDetails',
      component: MeldingenDetails,
  },
  {
    path: '/meldingen/:regio',
    name: 'meldingen-filter',
    component: FilterMeldingen,
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
    path: '/nieuws/:region',
    name: 'filter-nieuws',
    component: FilteredNews,

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
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics,
  },
  {
    path:'/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path:'/edit-profile',
    name:'edit_profile',
    component: EditProfile,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
