import axios from "axios";

export const meldingenStore = {
    namespaced: true,
    state:{
        meldingen:[],
        isLoading :false,
        melDetails : {},
    },
    mutations:{
        SET_MELDINGEN(state,payload){
            state.meldingen = payload;

        },
        CHANGE_LOADING(state, payload) {
            state.isLoading = payload
        },
        MELDINGEN_DETAILS(state, payload){
            state.melDetails = payload
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
        },
        meldingen_details({commit},id){
            commit('CHANGE_LOADING',true);
            axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/`+id)
                .then(response=>{
                    commit('MELDINGEN_DETAILS',response.data)
                    
                        commit('CHANGE_LOADING',false);
                    
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    },
}