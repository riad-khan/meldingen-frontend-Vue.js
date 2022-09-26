import { createStore } from 'vuex';
import {newsStores} from "@/store/NewsStore/newsStore";
import {PartnerBlogStore} from "@/store/PartnerBlogsStore/PartnerBlogStore";
import {BlogStore} from "@/store/Blog/BlogStore";
import {commentsStore} from "@/store/Comments/commentsStore";
import {meldingenStore} from "@/store/Meldingen/meldingenStore";



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
    commentsStore,
    meldingenStore
  }
})


