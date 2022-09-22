import axios from "axios";

export const newsStores = {
    namespaced: true,
    state:{
        news:[],
        isLoading: false,
    },
    mutations:{
        FETCH_NEWS(state, payload){
          state.news=payload;
        },
        CHANGE_ISLOADING(state,payload){
                state.isLoading = payload
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

        }
    },

}