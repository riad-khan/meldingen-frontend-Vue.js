<template>

  <!-- Main section -->
  <main class="main-content bg-dark-white">
    <!-- / Step Section-->
    <section class="page-content details-page sec-padding">
      <div class="container">

        <div v-if="isLoading === true" style="height: 300px;" :class="isLoading ? 'spin':''"></div>

        <div v-else data-aos="fade-up" data-aos-delay="10" data-aos-once="true" class="meldingen_div">
          <div class="breadcrumbs desktop-only">
            <ul class="inline-list">
              <li>
                <router-link to="/">Home</router-link><span class="right-angel">></span>
              </li>
              <li><a href="/noord-holland">{{meldingenDetails.provincie}}</a><span class="right-angel">></span></li>
              <li><a href="/noord-holland/schiphol">{{meldingenDetails.stad}}</a><span class="right-angel">></span></li>
              <li class="text-trans-cap">{{meldingenDetails.categorie}}</li>
            </ul>
          </div>

          <div class="row with-sidebar ">
            <div :class="'col-md-8 col-lg-9 col-xs-12'">



              <div class="content">
                <h2 class="content-heading">
                  {{meldingenDetails.straat}} in {{meldingenDetails.stad}} - <span
                    class="text-trans-cap">{{meldingenDetails.categorie}}</span>

                </h2>
                <div class="meta">
                  <ul class="inline-list">
                    <li><span class="icon-clock"></span> {{ DateTime(meldingenDetails.timestamp) }}</li>

                  </ul>
                </div>
                <p>Regio {{meldingenDetails.regio}} kreeg op {{DateTime(meldingenDetails.timestamp, 'dddd DD MMMM [om]HH:mm')}} een melding via het p2000 netwerk. De {{meldingenDetails.dienst}} is met spoed uitgerukt
                  naar de {{meldingenDetails.straat}} in {{meldingenDetails.stad}}</p>


                <h3 class="weight-500 mt-30">Verzonden aan eenheden</h3>
                <ul class="inline-list list-gap-10 d-flex align-items-center">
                  <li><img width="24" src="https://p2000.net/img/Ambulance.png" alt="Ambulance icon" /></li>
                  <li><a href="#" rel="nofollow">126999</a>, </li>
                  <li>Ambulance Kennemerland Monitorcode </li>
                </ul>
                <ul class="inline-list list-gap-10 d-flex align-items-center">
                  <li><img width="24" src="https://p2000.net/img/Brandweer.png" alt="Brandweer icon" /></li>
                  <li><a href="#" rel="nofollow">2029568</a>, </li>
                  <li>Brandweer Landelijk Groepscode Group-1 </li>
                </ul>
                <ul class="inline-list list-gap-10 d-flex align-items-center">
                  <li><img width="24" src="https://p2000.net/img/Ambulance.png" alt="Ambulance icon" /></li>
                  <li><a href="#" rel="nofollow">126164</a>, </li>
                  <li>Ambulance Kennemerland onbekend onbekend onbekend</li>
                </ul>
                <ul class="social mobile-only">
                  <li class="label">Delen:</li>
                  <li><a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://p2000.net/noord-holland/schiphol/vertrekpassage/a1-12164-rit-134243-ams-airport-medical-services-vertrekpassage-schiphol-839530"
                      target="_blank"><span class="icon-facebook"><span class="path1"></span><span
                          class="path2"></span></span></a></li>
                  <li><a
                      href="https://twitter.com/intent/tweet?text=ambulance+spoedurgentie&amp;url=https://p2000.net/noord-holland/schiphol/vertrekpassage/a1-12164-rit-134243-ams-airport-medical-services-vertrekpassage-schiphol-839530"
                      target="_blank"><span class="icon-twitter"><span class="path1"></span><span
                          class="path2"></span></span></a></li>
                  <!--<li><a href="#"><span class="icon-Instagram"></span></a></li>-->
                </ul>
                <div class="google-map-sec">
                  <iframe
                    :src="'https://maps.google.com/maps?q='+meldingenDetails.straat+','+meldingenDetails.stad+'&t=&z=15&ie=UTF8&iwloc=&output=embed'"
                    width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <ul class="social desktop-only">
                  <li class="label">Delen:</li>
                  <li><a href=""><span class="icon-facebook"><span class="path1"></span><span
                          class="path2"></span></span></a></li>
                  <li><a href=""><span class="icon-twitter"><span class="path1"></span><span
                          class="path2"></span></span></a></li>
                  <li><a href=""><span class="icon-Instagram"></span></a></li>
                </ul>

              </div>

            </div>
            <div class="col-md-4 col-lg-3 col-xs-12">
              <div class="sidebar">
                <h3 class="weight-500">Ander Nieuws</h3>
                <div id="news_list">
                  <div class="card mobile-col-2 other-news box-shadow border-radius-8">
                    <div class="card-thumb">
                      <img class="desktop-only" src="/news_imgs/Brandweer/254A7629.jpg" alt="nieuws foto" />
                      <img class="mobile-only" src="/news_imgs/Brandweer/254A7629.jpg" alt="nieuws foto" />
                    </div>
                    <div class="card-content">
                      <h6><a
                          href="/nieuws/zuid-holland/rotterdam/rotterdam-winkeldieven-gepakt-met-twee-vuurwapens-36/36">Winkeldieven
                          gepakt met twee vuurwapens</a></h6>
                      <div class="meta">
                        <ul class="inline-list">
                          <li><span class="icon-clock"></span> 11:41 in</li>
                          <li><a href="/nieuws/zuid-holland">Zuid-Holland</a>, </li>
                          <li>Nederland</li>
                        </ul>
                      </div>
                      <div class="btn-group">
                        <a href="javascript:void(0)" rel="nofllow"
                          class="button btn-more bg-btngrey border-radius-8">Brandweer</a><a href="javascript:void(0)"
                          rel="nofllow" class="button btn-more bg-red border-radius-8">Politie</a>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="news-item box-shadow border-radius news-ad-sec"
                      style="background-image:url(https://p2000.net/img/news-thumb.jpg);">
                      <div class="news-content">
                        <h6 class="new-ad-heading">Dit is een placeholder voor reclame</h6>
                      </div>
                    </div>
                  </div>
                  <div class="card mobile-col-2 other-news box-shadow border-radius-8">
                    <div class="card-thumb">
                      <img class="desktop-only" src="/news_imgs/Politie/IMG_4689.jpg" alt="nieuws foto" />
                      <img class="mobile-only" src="/news_imgs/Politie/IMG_4689.jpg" alt="nieuws foto" />
                    </div>
                    <div class="card-content">
                      <h6><a
                          href="/nieuws/zuid-holland/s-gravendeel/s-gravendeel-getuigen-gezocht-brandstichting-s-gravendeel-37/37">Getuigen
                          gezocht brandstichting ’s-Gravendeel</a></h6>
                      <div class="meta">
                        <ul class="inline-list">
                          <li><span class="icon-clock"></span> 09:49 in</li>
                          <li><a href="/nieuws/zuid-holland">Zuid-Holland</a>, </li>
                          <li>Nederland</li>
                        </ul>
                      </div>
                      <div class="btn-group">
                        <a href="javascript:void(0)" rel="nofllow"
                          class="button btn-more bg-red border-radius-8">Politie</a><a href="javascript:void(0)"
                          rel="nofllow" class="button btn-more bg-yallow border-radius-8">Ambulance</a><a
                          href="javascript:void(0)" rel="nofllow"
                          class="button btn-more bg-btngrey border-radius-8">Brandweer</a><a href="javascript:void(0)"
                          rel="nofllow" class="button btn-more bg-btngrey border-radius-8">Gewond</a>
                      </div>
                    </div>
                  </div>


                </div>
                <div class="load-more mobile-only text-center">
                  <button class="button btn-tranparent" data-id="0" data-next="37"
                    onclick="load_more_mobile_news(this)">Bekijk alle artikelen</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-20">
            <div class="col-md-12">
              <div class="news-item box-shadow border-radius news-ad-sec"
                style="background-image:url(https://p2000.net/img/add-img.jpg);">
                <div class="news-content">
                  <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / Step Section-->
  </main>



</template>

<script>
import { useStore } from 'vuex'
import moment from "moment";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router';
import { reactive,computed } from 'vue';
import axios from 'axios';

axios
export default {
  name: "MeldingenDetails",

  setup() {
    const route = useRoute();
    const id = route.params.id;
    let siteData = reactive({
      title: '',
      description:'',
      keywords: ''
    })
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/meldingen/` + id)
      .then((response) => {
        siteData.title = response.data[0].categorie + ' - ' +response.data[0].stad + ', ' +response.data[0].straat + ' | 112 Meldingen op Meldingen.nl';
      })
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/seo-data/Home`)
      .then((response) => {
          siteData.description = response.data.seo_meta;
          siteData.keywords = response.data.seo_keywords;
      })

      useHead({
      title: () => siteData.title,
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

  mounted() {
    AOS.init();
  },
  methods: {
    DateTime(value) {
      return moment.unix(value, "MM-DD-YYYY");
    }
  },
  created() {
    const id = this.$route.params.id;
    const store = useStore();
    store.dispatch('meldingenStore/meldingen_details', id);
  },
  computed: {
    meldingenDetails() {
      const store = useStore();
      return store.state.meldingenStore.melDetails[0]
    },
    isLoading() {
      const store = useStore();
      return store.state.meldingenStore.isLoading
    }
  }
}
</script>

<style scoped>

</style>