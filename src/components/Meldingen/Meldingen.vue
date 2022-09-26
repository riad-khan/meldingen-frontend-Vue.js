<template>
    <location urlPath="meldingen" />
  <RegioList region="Nederland" path="meldingen" />

  <div class="container">
    <div class="row">
      <div class="col-md-9">


        <div class="news-item box-shadow border-radius" v-for="(item,i) in meldingens" :key="i" style="margin: 10px;">
          <img class="news-icon" src="https://p2000.net/img/ambulance.svg" alt="Ambulance icon" width="63px">
          <div class="news-content">

            <h2><a href="https://p2000.net/utrecht/breukelen/maarssenbroeksedijk/a2-maarssen-102396-831545">{{item.p2000.substr(0,25) + '...'}}</a></h2>
            <p class="place">

              <span class="place-name">{{DateTime(item.timestamp)}}</span>


            </p>
            <span class="place-title primary-color">{{ item.provincie}}, </span>  <span class="place-name"> {{item.regio}}</span>
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
export default {
  name: "Meldingen",
  components: {RegioList, Location},
  created() {
      const store = useStore();
      store.dispatch('meldingenStore/fetchMeldingen');
  },

  methods:{
    DateTime(value){
      return moment.unix(value).endOf('hour').fromNow()
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