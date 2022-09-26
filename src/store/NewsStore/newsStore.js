import axios from "axios";

export const newsStores = {
    namespaced: true,
    state:{
        news:[],
        isLoading: false,
        newsDetails : {},
        recentNews:[],
        filteredNews : [],
        regios:[],

    },
    mutations:{
        FETCH_NEWS(state, payload){
          state.news=payload;
        },
        CHANGE_ISLOADING(state,payload){
                state.isLoading = payload
        },
        FETCH_NEWS_DETAILS (state,payload){
            state.newsDetails = payload
        },
        GET_RECENT(state, payload){
            state.recentNews = payload
        },
        SET_FILTERED_NEWS(state,payload){
            state.filteredNews = payload;

        },
        SET_REGIOS(state,payload){
            state.regios = payload
        }
    },
    actions :{
        newsApi({commit}){
            commit('CHANGE_ISLOADING',true)
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/news`)
                .then((response)=>{
                    commit('FETCH_NEWS',response.data)
                    commit('CHANGE_ISLOADING',false)
                })

        },
        newsDetails({commit},id){
            commit('CHANGE_ISLOADING',true);
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/${id}`)
                .then(response =>{
                    commit('FETCH_NEWS_DETAILS',response.data)
                })
                .catch(error =>{
                    console.log(error.response.data)
                })
        },
        recentNews({commit}){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/recent/news`)
                .then((response)=>{
                  commit('GET_RECENT',response.data)

                })
                .catch((error)=>{
                    console.log(error.response.data)
                })
        },
        filteredNews({commit},region){
            commit('CHANGE_ISLOADING',true);
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/filter-news/${region}`)
                .then((response)=>{
                    commit('CHANGE_ISLOADING',false);
                    commit('SET_FILTERED_NEWS',response.data)
                })
                .catch((error)=>{
                    console.log(error.response.data)
                })
        },
        fetchRegios({commit}){
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/fetch/regios`)
                .then((response)=>{

                    commit('SET_REGIOS',response.data)
                })
                .catch((error)=>{
                    console.log(error.response.data)
                })
        }
    },

}