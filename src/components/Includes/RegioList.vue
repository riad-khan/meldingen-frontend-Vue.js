<template>
  <section class="news-overview-sec">
    <div class="container">
      <button class="news-list-btn" @click="toggleRegio" id="news-btn">Trending in <span class="primary-color">{{region}}</span> <img src="../../assets/img/icon-angle-down.svg" alt="" /></button>
      <div class="row bg-white border-radius map-overlay" id="news-list">
        <div class="col-md-12">
          <h2 class="sec-heading">Kies je regio</h2>
        </div>
        <div class="col col-md-3" v-for="(item, i) in regios" :key="i">
          <div class="news-list">
            <ul>
              <li :class="region === item.regio ? 'active' : ''"><router-link :to="`/${path}/${item.regio_url}`" >{{item.regio}}</router-link></li>

            </ul>
          </div>
        </div>


      </div>
    </div>
  </section>


  <!--/ News Overview Section -->
</template>

<script>
import {useStore} from 'vuex';
export default {
  name: "RegioList",
  props:['region','path'],
  created() {
      const store = useStore();
      store.dispatch('newsStores/fetchRegios');
  },
  computed:{
      regios(){
        const store = useStore();
        return store.state.newsStores.regios
      }
  },
  methods:{
    toggleRegio(){
      $("#news-list").slideToggle(500);
      $(this).toggleClass("angle-up");
      $("#widget_title").toggleClass("slideOpen",500);
    },

  }
}
</script>

<style scoped>

</style>