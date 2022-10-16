
<template>
    <main class="main-content bg-lightgrey">

    <Location urlPath="nieuws" />
    <RegioList region="Nederland" path="nieuws" />


    <!-- News Section-->
    <section class="news-archive sec-padding pt-0">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <div class="main-content">

              <!--            News card start    -->
              <div data-aos="fade-up" data-aos-delay="10" data-aos-once="true" class="card other-news box-shadow border-radius-8 d-flex" v-for="item in news" :key="item.id">
                <div class="news-thumb">
                  <img class="img-thumb" :src="storageUrl + item.image" alt="">
                </div>
                <div class="card-content">
                  <h3 class="card-heading">
                    <router-link :to="'/nieuws/'+item.state+'/'+item.city+'/'+item.slug+'/'+item.id">
                      {{item.title}}</router-link>
                  </h3>
                  <div class="meta">
                    <ul class="inline-list">
                      <li><span class="icon-clock"></span> {{dateTime(item.created_at)}} in &nbsp;</li>
                      <li><a href="">{{item.state}}</a>, </li>
                      <li>Nederland</li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <a href="" class="button btn-more bg-blue border-radius-8">{{item.tags}}</a>
                    <a href="" class="button btn-more bg-btngrey border-radius-8">Verkeer</a>
                  </div>
                </div>
              </div>

              <!--                News card end-->

              <div class="load-more text-center offset-2 mobile-only">
                <button class="button btn-tranparent">Bekijk alle artikelen</button>
              </div>

              <div class="card card-img">
                <div class="news-item box-shadow border-radius news-ad-sec min-height-100" :style="image">
                  <div class="news-content">
                    <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                  </div>
                </div>
              </div>
              <h2 class="sec-heading mt-30 color-black">Ander Nieuws</h2>

              <div data-aos="fade-up" data-aos-delay="10" data-aos-once="true" class="card other-news box-shadow border-radius-8" v-for="(item, i) in moreNews" :key="i">
                
                <div class="card-content">
                  <h3 class="text-limit-2"><router-link :to="'/nieuws/'+item.state+'/'+item.city+'/'+item.slug+'/'+item.id">{{item.title}}</router-link></h3>
                  <div class="meta">
                    <ul class="inline-list">
                      <li><span class="icon-clock"></span> {{dateTime(created_at)}} in</li>
                      <li><a href="">{{item.state}}</a>, </li>
                      <li>Nederland</li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <a href="" class="button btn-more bg-red border-radius-8">{{item.tags}}</a>
                    <a href="" class="button btn-more bg-btngrey border-radius-8">Verkeer</a>
                  </div>
                </div>
              </div>

              
              <div class="load-more text-center offset-2 mobile-only">
                <button class="button btn-tranparent">Bekijk alle artikelen</button>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="sidebar">
              
            <h2 class="sec-heading weight-500" id="widget_title">Eerdere P2000-meldingen</h2>

            <div v-for="(item,i) in recentMeldingen">
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-content">
                  <h3>
                    <router-link
                      :to="'/'+item.provincie+'/'+item.stad_url+'/'+item.straat_url+'/'+item.categorie_url+'/'+item.id">
                      {{item.categorie}}</router-link>
                  </h3>
                  <div class="meta">
                    <ul class="inline-list">
                      <span class="place-name" style="bottom: 33px;">{{DateTimeUnix(item.timestamp)}}</span>
                     
                    </ul>
                  </div>
                  <div class="btn-group">
                    <a href="" class="button btn-more bg-red border-radius-8">{{item.dienst}}</a>
                    <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
                  </div>
                </div>
              </div>
            
              <div class="card card-img" v-if="i % 2 === 1">
                <div class="news-item box-shadow border-radius news-ad-sec min-height-100" :style="image">
                  <div class="news-content">
                    <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                  </div>
                </div>
              </div>
             
            
            

            </div>


              <div class="card card-img square">
                <div class="news-item box-shadow border-radius news-ad-sec min-height-100" :style="image">
                  <div class="news-content">
                    <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                  </div>
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
import { useStore } from 'vuex';
import moment from 'moment';
import { Head } from '@vueuse/head'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Location from "@/components/Includes/Location";
import RegioList from "@/components/Includes/RegioList";
import { reactive } from 'vue'
export default {
  // setup() {
  //   const siteData = reactive({
  //     title: "Meldingen News",
  //     description: 'meldingen news',
  //   })

  //   useHead({
  //     title: () => siteData.title,
  //     meta: [
  //       { name: 'description', content: () => siteData.description },
  //       {
  //         property: "og:locale:alternate",
  //         content: "zh",
  //         key: "zh",
  //       },
  //     ]
  //   })

  // },


  name: "News",
  components: { RegioList, Location },
  data() {
    return {
      image: { backgroundImage: `url(${require('../../assets/img/add-img.jpg')})` },
      storageUrl : process.env.VUE_APP_LARAVEL_URL,
      increment : 1,
      nextReq : null,
      moreNews : [],
      recentMeldingen:[],
    }
  },
  beforeCreate() {
    const store = useStore();
    store.dispatch('newsStores/newsApi');
    AOS.init();
  },
  mounted(){
    this.getOtherNews();
    window.addEventListener('scroll', this.handleScroll);

    axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/recent/meldingen`)
      .then((response)=>{
       this.recentMeldingen = response.data
      })
      .catch(error =>{
        console.log(error);
      })
   
  },

  computed: {
    news() {
      const store = useStore();
      return store.state.newsStores.news
    }
  },


  methods: {
    dateTime(value) {
      return moment(value).format('hh:mm');
    },
    DateTimeUnix(value) {
      return moment.unix(value, "MM-DD-YYYY").locale('nl').fromNow()
    },

    getOtherNews(){
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/other/news/`)
        .then((response) => {
          response.data.map((item, i) => {
            this.increment = 2;
            this.moreNews.push(item)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    getMoreOtherNews(page){
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/news/getMoreOtherNews/`+page)
        .then((response) => {
          response.data.map((item, i) => {
            this.moreNews.push(item)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleScroll() {
      if ((Math.round(window.scrollY) + window.innerHeight) >= document.body.scrollHeight) {
       
          this.getMoreOtherNews(this.increment++); 
      }

    },
   



  }

}
</script>

<style scoped>

</style>