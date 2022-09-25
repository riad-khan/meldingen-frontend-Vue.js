import axios from "axios";

export const commentsStore = {
    namespaced: true,
    state:{
        isLoading : false,
        comments:[],
    },
    mutations:{
        IS_LOADING(state, payload) {
            state.isLoading = payload;
        },
        SET_COMMENTS(state,payload){
            state.comments = payload
        }
    },
    actions:{
        getComments({commit},id,token){
            commit('IS_LOADING',true);
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/comments/get-comments/${id}`,{
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response)=>{
                    commit('IS_LOADING',false);
                    commit('SET_COMMENTS',response.data)
                })
                .catch((error)=>{
                    console.log(error.response)
                })
        }

    }
}