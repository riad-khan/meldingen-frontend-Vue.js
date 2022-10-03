<template>
  <location urlPath="meldingen" />
  <RegioList :region="region" path="meldingen" />

  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div v-if="isLoading === true" style="height: 300px;" :class="isLoading ? 'spin':''"></div>

        <div v-for="(item,i) in meldingens" :key="i">
          <div data-aos="fade-up" data-aos-delay="10" data-aos-once="true" class="news-item box-shadow border-radius"
            style="margin: 10px;">
            <img :class="'news-icon'" v-if="item.dienst === 'ambulance'" src="../../assets/img/ambulance.png">
            <img :class="'news-icon'" v-if="item.dienst === 'politie'" src="../../assets/img/politie.png">
            <img :class="'news-icon'" v-if="item.dienst === 'brandweer'" src="../../assets/img/brandweer.png">
            <img :class="'news-icon'" v-if="item.dienst === 'kustwacht'" src="../../assets/img/kustwacht.png">


            <div class="news-content">



              <h2>
                <router-link
                  :to="'/'+item.provincie+'/'+item.stad_url+'/'+item.straat_url+'/'+item.categorie_url+'/'+item.id">
                  {{item.categorie}}</router-link>
              </h2>

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

              <span class="place-name"> {{item.straat}}</span> in <span class="place-title"
                style="color: #669e97 !important;">{{ item.stad}} </span>, <span class="place-name">
                {{item.provincie}}</span>
            </div>

          </div>
          <div v-if="i % 7 === 5" class="card card-img">
            <div class="news-item box-shadow border-radius news-ad-sec min-height-100"
              style="background-image: url(&quot;/img/add-img.0139dd0c.jpg&quot;);">
              <div class="news-content">
                <h2 class="new-ad-heading"> Dit is een placeholder voor reclame</h2>
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  </div>


</template>



<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Location from "@/components/Includes/Location";
import RegioList from "@/components/Includes/RegioList";
import { useStore } from 'vuex'
import moment from "moment/moment";
import axios from "axios";


export default {
  name: "FilterMeldingen",
  components: { RegioList, Location },
  data() {
    return {
      prio: {
        1: 'Spoed',
        2: 'Gepaste spoed',
        3: 'Geen spoed',
        4: 'Grote ingreep'
      },
      meldingens: [],
      increment: 0,
      region: '',
      isLoading: false,


    }
  },
  created() {
    const regio = this.$route.params.regio;
    const store = useStore();
    // store.dispatch('meldingenStore/fetchMeldingen');
    this.getMeldingen()
    this.region = regio

    AOS.init();
  },


  mounted() {
    this.getScroll()

  },
  methods: {
    DateTime(value) {
      return moment.unix(value, "MM-DD-YYYY").locale('nl').fromNow()
    },
    getMeldingen() {
      this.isLoading = true;
      const regio = this.$route.params.regio;
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/filter-meldingen/` + regio + '/' + this.increment)
        .then((response) => {
          response.data.map((item, i) => {
            this.increment = 1;
            this.meldingens.push(item);
            this.isLoading = false;
          })
        })
        .catch(error => {
          console.log(error)
          this.isLoading = false;
        })
    },

    getMoreMeldingen(page) {
      const regio = this.$route.params.regio;
      this.isLoading = true;
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/filter-meldingen/` + regio + '/' + page)
        .then((response) => {
          response.data.map((item, i) => {
            this.meldingens.push(item)
            this.isLoading = false;
          })
         
          console.log(this.increment)
        })
        .catch(error => {
          console.log(error)
          this.isLoading = false;
        })

    },

    getScroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.getMoreMeldingen(this.increment++)
        }
      };
    }
  },


}
</script>

<style scoped>

</style>