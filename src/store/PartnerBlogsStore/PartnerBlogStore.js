import axios from "axios";

export const PartnerBlogStore ={
    namespaced:true,
    state:{
        partnerBlogs : [],
        isLoading: false,
        error:{},
        blogDetails:{},
        recentBlogs:[],
    },
    mutations:{
        FETCH_PARTNER_BLOGS(state, payload){
            state.partnerBlogs = payload
        },
        CHANGE_LOADING(state,payload){
            state.isLoading = payload
        },
        SET_ERROR(state, error){
            state.error = error
        },
        SET_BLOG_DETAILS(state,payload){
            state.blogDetails = payload
        },
        RECENT_BLOGS(state, payload){
            state.recentBlogs = payload

        },
        CLEAR_STATE(state,payload){
            state.blogDetails = {}
        }
    },
    actions:{
        partnerBlogsAPI({commit}){
            commit('CHANGE_LOADING',true)
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/partner-blogs`)
                .then(response =>{
                    commit('FETCH_PARTNER_BLOGS',response.data)
                    commit('CHANGE_LOADING',false)
                })
                .catch((error)=>{
                    commit('SET_ERROR',error.response.data)
                })
        },
        partnerBlogDetails({commit},id){
            commit('CHANGE_LOADING',true);
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/partner-blogs/${id}`)
                .then((response)=>{
                    commit('SET_BLOG_DETAILS',response.data);
                    commit('CHANGE_LOADING',false);
                })
                .catch((error)=>{
                    console.log(error.response.data);
                })
        },
        recentBlogs({commit}){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/partner-blogs/recent-partner-blogs`)
                .then((response)=>{
                    commit('RECENT_BLOGS',response.data);
                })
                .catch((error)=>{
                    console.log(error.response.data)
                })
        }

    }
}