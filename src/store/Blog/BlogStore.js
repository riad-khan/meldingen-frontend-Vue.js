import axios from "axios";

export const BlogStore ={
    namespaced:true,
    state:{
        blogs:[],
        isLoading: false,
        blogDetails :{},
        recentBlog:[],
        category:[],
        filteredBlogs:[],

    },
    mutations:{
        BLOGS_FETCH(state,payload){
            state.blogs = payload
        },
        ISLOADING(state,payload){
            state.isLoading = payload
        },
        SET_DETAILS(state,payload){
            state.blogDetails = payload
        },
        RECENT_BLOGS(state,payload){
            state.recentBlog = payload;
        },
        BLOG_CATEGORY(state, payload){
            state.category = payload
        },
        FILTER_BLOGS(state,payload){
            state.filteredBlogs = payload
        }
    },
    actions:{
        blogApi({commit}){
                commit('ISLOADING',true)
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/blogs`)
                .then((response)=>{
                   commit('BLOGS_FETCH',response.data)
                    commit('ISLOADING',false)
                })
                .catch((error)=>{
                    commit('ISLOADING',false)
                })
        },
        blogDetails({commit},id){
            commit('ISLOADING',true);
            console.log(id)
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/blogs/`+id)
                .then((response)=>{
                    commit('ISLOADING',false);
                    commit('SET_DETAILS',response.data)

                })
        },
        recentBlogs({commit}){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/blogs/recent-blogs`)
                .then((response)=>{
                    commit('RECENT_BLOGS',response.data)
                })
                .catch((error)=>{
                    console.log(error.response.data);
                })
        },
        blogCategory({commit}){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/blogs/category`)
                .then((response)=>{
                    commit('BLOG_CATEGORY',response.data)
                })
                .catch(error =>{
                    console.log(error.response.data)
                })
        },

        filteredBlogs({commit},id){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/blogs/filtered-blogs/${id}`)
                .then((response)=>{
                    commit('FILTER_BLOGS',response.data)

                })
                .catch(error=>{
                    console.log(error.response.data)
                })
        }
    }
}