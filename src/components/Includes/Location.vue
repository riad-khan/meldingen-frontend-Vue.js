<template>
  <!--Location call to action section-->
  <section class="call-to-action">
    <div class="container">
      <div class="row d-flex align-items-center call-to-row box-shadow bg-white-gray">
        <div class="col-md-8 col-xs-7">
          <div class="location-search-form">
            <input type="text" v-model="search" @input="(e)=>searchRegion(e)" name="placename"
              placeholder="Zoek op plaatsnaam" />
          </div>
        </div>
        <div class="col-md-4 col-xs-5">

          <div class="call-to-link textright">
            <button @click.prevent="findMyLocation" class="button text-locator">
            
              <span :class="isLoading ? 'rolling-spin':'icon-search'"></span>
            </button>
          </div>
        </div>
      </div>



      <div class="row">
        <div class="col-md-12">
          <div v-show="isOpen" class="searchbar-area box-shadow" id="search_by_place_result"
            v-for="(item, i) in locations">
            <router-link class="d-block" :to="`/${urlPath}/${item.regio_url}`">{{item.stad}} <span>{{item.provincie}}
              </span></router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!--/ Location call to action section-->
</template>

<script>
import { computed } from "@vue/reactivity";
import axios from "axios";
import { useStore } from 'vuex';
export default {
  name: "Location",
  props: ['urlPath'],
  data() {
    return {
      isOpen: false,
      meldinges: [],
      search: '',
      isLoading: false,
    }
  },

  methods: {
    findMyLocation() {
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        axios.get(geoApi)
          .then((response) => {
            this.$router.push(`/${this.urlPath}/${response.data.city}`)
          })
          .catch((error) => {
            console.log(error.response.data)
          })
      };
      const error = () => {
        console.log('unable to find')
      };
      navigator.geolocation.getCurrentPosition(success, error)

    },
    searchRegion(e) {
      this.isLoading = true;
    
        axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/auto/search?search=${e.target.value}`)
          .then((res) => {
            this.meldinges = [];
            this.meldinges.push(res.data)
            this.isLoading = false;
          })
          .catch((error) => {
            console.log(error)
          })
   
      this.isOpen = true

      if (this.search === '') {
        this.meldinges = []
        this.isOpen = false
      }


    }
  },
  computed: {
    locations() {
      return this.meldinges[0]
    }
  }
}
</script>

<style scoped>

</style>