<template>
  <location urlPath="meldingen" />
  <RegioList region="Nederland" path="meldingen" />

<section class="news-archive sec-padding pt-0">
  <div class="container">
    <div class="row">
      <div class="col-md-12 meldingen_div">


        <div v-if="isLoading === true" style="height: 300px;" :class="isLoading ? 'spin':''"></div>


        <div v-else v-for="(item,i) in meldingens" :key="i">
          <div data-aos="fade-up" data-aos-delay="10" data-aos-once="true" class="news-item box-shadow border-radius">
            <img :class="'news-icon'" :src="require(`@/assets/img/${item.dienst}.png`)">


            <div class="news-content">
              <h2>
                <router-link
                  :to="'/'+item.provincie+'/'+item.stad_url+'/'+item.straat_url+'/'+item.categorie_url+'/'+item.id">
                  {{item.categorie}}</router-link>
              </h2>

              <p class="place">

                <span class="place-name" style="bottom: 33px;">{{DateTime(item.timestamp)}}</span>

                <span class="place-name text-center"
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

          <div v-if="loadingMore === true" style="height: 300px;" :class="loadingMore ? 'spin':''"></div>

        </div>





      </div>
    </div>
  </div>
</section>


</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Location from "@/components/Includes/Location";
import RegioList from "@/components/Includes/RegioList";
import { useStore } from 'vuex'
import moment from "moment/moment";
import axios from "axios";
import { useHead } from '@vueuse/head';
import { reactive } from 'vue';
let test ='';
export default {

  setup() {
    const store = useStore();
    store.dispatch('meldingenStore/fetchMeldingen');
    console.log(store);
    let siteData = reactive({
      title:'',
      description: '',
      keywords:''
    });
    test ="bla bla";
    // axios.get(`${process.env.VUE_APP_BACKEND_URL}/seo-data/Home`)
    //   .then((response) => {
    //       siteData.title = response.data.title;
    //       siteData.description = response.data.seo_meta;
    //       siteData.keywords = response.data.seo_keywords;
    //   })
    useHead({
      title: () => test,
      meta: [
        { name: 'description', content: () => siteData.description },
        { name: 'keywords', content: () => siteData.keywords },
        {
          property: "og:title",
          content: () => siteData.title,
        },
        {
          property: "og:description",
          content: () => siteData.description,
        },
        {
          property: "twitter:title",
          content: () => siteData.title,
        },
        {
          property: "twitter:description",
          content: () => siteData.description,
        },
       
      ]
    })

  },

  name: "Meldingen",
  components: { RegioList, Location },
  data() {
    return {
      prio: {
        1: 'Spoed',
        2: 'Gepaste spoed',
        3: 'Geen spoed',
        4: 'Grote ingreep'
      },
      title: 'ok',
      nexReq: false,
      meldingens: [],
      increment: 0,
      isLoading: false,
      loadingMore: false,


    }
  },

  mounted() {
    
    window.addEventListener('scroll', this.handleScroll)
    const store = useStore();
    // store.dispatch('meldingenStore/fetchMeldingen');
    this.getMeldingen()
    AOS.init();
    //document.getElementById("testmeta").setAttribute("description","Bla Bla Bla");
    //console.log(document.getElementsByTagName("title"));

      this.title = test

  },
  methods: {

    DateTime(value) {
      return moment.unix(value, "MM-DD-YYYY").locale('nl').fromNow()
    },
    getMeldingen() {
      this.isLoading = true;

      axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/scroll-more/` + this.increment)
        .then((response) => {
          response.data.map((item, i) => {
            this.increment = 1;
            this.meldingens.push(item)
            this.isLoading = false
          })
        })
        .catch(error => {
          console.log(error)
        })

    },

    getMoreMeldingen(page) {
      this.nexReq = true;
      this.loadingMore = true;

      axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/scroll-more/` + page)
        .then((response) => {
          this.nexReq = false;
          response.data.map((item, i) => {

            this.meldingens.push(item)
            this.loadingMore = false;
          })

        })
        .catch(error => {
          console.log(error)
        })





    },
    handleScroll() {
      if ((Math.round(window.scrollY) + window.innerHeight) >= document.body.scrollHeight) {


        if (this.nexReq === false) {
          this.getMoreMeldingen(this.increment++);
        }

      }

    }
  },

}
</script>

<style scoped>

</style>