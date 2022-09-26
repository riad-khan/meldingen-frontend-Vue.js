<template>
  <!--Location call to action section-->
  <section class="call-to-action">
    <div class="container">
      <div class="row d-flex align-items-center call-to-row box-shadow bg-white-gray">
        <div class="col-md-8 col-xs-7">
          <div class="location-search-form">
            <input type="search" name="placename" placeholder="Zoek op plaatsnaam" />
          </div>
        </div>
        <div class="col-md-4 col-xs-5">
          <div class="call-to-link textright">
            <button @click.prevent="findMyLocation" class="button text-locator"><span class="icon-search"></span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/ Location call to action section-->
</template>

<script>
import axios from "axios";
export default {
  name: "Location",
  props:['urlPath'],
  methods:{
    findMyLocation(){
      const success = (position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        axios.get(geoApi)
            .then((response)=>{
              this.$router.push(`/${this.urlPath}/${response.data.city}`)
            })
            .catch((error)=>{
              console.log(error.response.data)
            })
      };
      const error = () =>{
        console.log('unable to find')
      };
      navigator.geolocation.getCurrentPosition(success, error)

    }
  }
}
</script>

<style scoped>

</style>