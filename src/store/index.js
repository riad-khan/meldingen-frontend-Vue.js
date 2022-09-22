import { createStore } from 'vuex';
import {newsStores} from "@/store/NewsStore/newsStore";
import {PartnerBlogStore} from "@/store/PartnerBlogsStore/PartnerBlogStore";
import {BlogStore} from "@/store/Blog/BlogStore";



export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    newsStores,
    PartnerBlogStore,
    BlogStore,
  }
})


