import axios from "axios";

export const meldingenStore = {
    namespaced: true,
    state:{
        meldingen:[],
        isLoading :false,
    },
    mutations:{
        SET_MELDINGEN(state,payload){
            state.meldingen = payload;
            console.log(state.meldingen)
        },
        CHANGE_LOADING(state, payload) {
            state.isLoading = payload
        }
    },
    actions:{
        fetchMeldingen({commit}){
            commit('CHANGE_LOADING',true)
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen`)
                .then((response)=>{
                    commit('SET_MELDINGEN',response.data)
                    commit('CHANGE_LOADING',false)
                })
                .catch((error)=>{
                    console.log(error.response.data)
                })
        }
    },
}