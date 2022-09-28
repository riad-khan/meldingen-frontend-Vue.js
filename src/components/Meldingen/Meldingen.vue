<template>
    <location urlPath="meldingen" />
  <RegioList region="Nederland" path="meldingen" />

  <div class="container">
    <div class="row">
      <div class="col-md-9">




        <div class="news-item box-shadow border-radius" v-for="(item,i) in meldingens" :key="i" style="margin: 10px;">
          <img :class="'news-icon'" v-if="item.dienst === 'ambulance'" src="../../assets/img/ambulance.png" >
          <img :class="'news-icon'" v-if="item.dienst === 'politie'" src="../../assets/img/politie.png" >
          <img :class="'news-icon'" v-if="item.dienst === 'brandweer'" src="../../assets/img/brandweer.png" >
          <img :class="'news-icon'" v-if="item.dienst === 'kustwacht'" src="../../assets/img/kustwacht.png" >


          <div class="news-content">



            <h2><router-link :to="'/'+item.provincie+'/'+item.stad_url+'/'+item.straat_url+'/'+item.categorie_url+'/'+item.id">{{item.categorie}}</router-link></h2>

            <p class="place">

              <span class="place-name" style="bottom: 33px;">{{DateTime(item.timestamp)}}</span>

              <span class="place-name"
                    style="background-color: #e05b59;color: white;bottom: 14px;font-size: 14px;padding: 3px 5px;border-radius:4px"
                    v-if="item.prio === 1">{{prio["1"]}}
              </span>
              <span class="place-name"
                    style="background-color: #deae00;color: white;bottom: 14px;font-size: 14px;padding: 3px 5px;border-radius:4px"
                    v-if="item.prio === 2">{{prio["2"]}}
              </span>
              <span class="place-name"
                    style="background-color: #669e97;color: white;bottom: 14px;font-size: 14px;padding: 3px 5px;border-radius:4px"
                    v-if="item.prio === 3">{{prio["3"]}}
              </span>
              <span class="place-name"
                    style="background-color: #deae00;color: white;bottom: 14px;font-size: 14px;padding: 3px 5px;border-radius:4px"
                    v-if="item.prio === 4">{{prio["4"]}}
              </span>
            </p>

            <span class="place-name"> {{item.straat}}</span> in  <span class="place-title" style="color: #669e97 !important;">{{ item.stad}} </span>,  <span class="place-name"> {{item.provincie}}</span>
          </div>
        </div>


      </div>
    </div>
  </div>


</template>

<script>
import Location from "@/components/Includes/Location";
import RegioList from "@/components/Includes/RegioList";
import {useStore} from 'vuex'
import moment from "moment/moment";
import ambulance from '../../assets/img/ambulance.png';
import politie from '../../assets/img/politie.png';
import brandweer from '../../assets/img/brandweer.png';
import kustwacht from '../../assets/img/kustwacht.png';
export default {
  name: "Meldingen",
  components: {RegioList, Location},
  data(){
    return{
      prio:{
        1: 'Spoed',
        2: 'Gepaste spoed',
        3: 'Geen spoed',
        4: 'Grote ingreep'
      },


    }
  },
  created() {
      const store = useStore();
      store.dispatch('meldingenStore/fetchMeldingen');
  },

  methods:{
    DateTime(value){
      return moment.unix(value,"MM-DD-YYYY").locale('nl').fromNow()
    }
  },

  computed:{
      meldingens(){
        const store = useStore();
        return store.state.meldingenStore.meldingen
      }
  }
}
</script>

<style scoped>

</style>