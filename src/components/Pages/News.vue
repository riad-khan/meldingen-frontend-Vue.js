<template>
    <main class="main-content bg-lightgrey">
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
                <button class="button text-locator"><span class="icon-search"></span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/ Location call to action section-->
      <section class="news-overview-sec">
        <div class="container">
          <button class="news-list-btn" id="news-btn">Trending in <span class="primary-color">Nederland</span> <img src="img/icon-angle-down.svg" alt="" /></button>
          <div class="row bg-white border-radius map-overlay" id="news-list">
            <div class="col-md-12">
              <h2 class="sec-heading">Kies je regio</h2>
            </div>
            <div class="col col-md-3">
              <div class="news-list">
                <ul>
                  <li class="active"><a href="">Amsterdam</a></li>
                  <li><a href="">Arnhem</a></li>
                  <li><a href="">Bollenstreek</a></li>
                  <li><a href="">Brabant-Noord</a></li>
                  <li><a href="">Brabant-Zuid</a></li>
                  <li><a href="">Drenthe</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-md-3">
              <div class="news-list">
                <ul>
                  <li><a href="">Friesland</a></li>
                  <li><a href="">Gelderland-Midden</a></li>
                  <li><a href="">Gelderland-Zuid</a></li>
                  <li><a href="">Gooi en Vechtstreek</a></li>
                  <li><a href="">Haaglanden</a></li>
                  <li><a href="">Hoeksche Waard</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-md-3">
              <div class="news-list">
                <ul>
                  <li><a href="">Hollandse Midden</a></li>
                  <li><a href="">Ijsseland</a></li>
                  <li><a href="">Kennemersland</a></li>
                  <li><a href="">Limburg-Zuid</a></li>
                  <li><a href="">Midden en West</a></li>
                  <li><a href="">Noord en Oost</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-md-3">
              <div class="news-list">
                <ul>
                  <li><a href="">Noord-Holland</a></li>
                  <li><a href="">Rotterdam-Rijnmond</a></li>
                  <li><a href="">Twente</a></li>
                  <li><a href="">Utrecht</a></li>
                  <li><a href="">Zaandstad</a></li>
                  <li><a href="">Zuid-Holland</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-md-3">
              <div class="news-list">
                <ul>
                  <li><a href="">Flevoland</a></li>
                  <li><a href="">Shoarmaland</a></li>
                  <li><a href="">Zuud</a></li>
                  <li><a href="">Apeldoorn</a></li>
                  <li><a href="">Nijmegen</a></li>
                  <li><a href="">Ijsseland</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/ News Overview Section -->


      <!-- News Section-->
      <section class="news-archive sec-padding pt-0">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="main-content">

                <!--            News card start    -->
                <div class="card other-news box-shadow border-radius-8 d-flex" v-for="item in news" :key="item.id">
                  <div class="news-thumb">
                    <img class="img-thumb" src="img/news-thumb-156x132.png" alt="">
                  </div>
                  <div class="card-content">
                    <h3 class="card-heading"><router-link :to="'/nieuws/'+item.stad+'/'+item.provincie+'/'+item.slug+'/'+item.id">{{item.title}}</router-link></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> {{dateTime(item.timestamp)}} in &nbsp;</li>
                        <li><a href="">{{item.regio}}</a>, </li>
                        <li>Nederland</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-blue border-radius-8">Ambulance</a>
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

                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2"><a href="">Fietsster (20) zwaargewond bij ongeval met vrachtauto in Den Haag</a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16:40 in</li>
                        <li><a href="">IJsselland</a>, </li>
                        <li>Nederland</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Ambulance</a>
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
                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2 d-flex align-item-center"><img class="ambulance" src="img/ambulance.svg" /><a href="">Brandweer met gepaste spoed </a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16-03-2022 </li>
                        <li>om 16:40</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Brandweer</a>
                      <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
                    </div>
                  </div>
                </div>
                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2 d-flex align-item-center"><img class="ambulance" src="img/ambulance.svg" /><a href="">Brandweer met gepaste spoed </a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16-03-2022 </li>
                        <li>om 16:40</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Brandweer</a>
                      <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
                    </div>
                  </div>
                </div>
                <div class="card card-img">
                  <div class="news-item box-shadow border-radius news-ad-sec min-height-100" :style="image">
                    <div class="news-content">
                      <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                    </div>
                  </div>
                </div>
                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2 d-flex align-item-center"><img class="ambulance" src="img/ambulance.svg" /><a href="">Brandweer met gepaste spoed </a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16-03-2022 </li>
                        <li>om 16:40</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Brandweer</a>
                      <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
                    </div>
                  </div>
                </div>
                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2 d-flex align-item-center"><img class="ambulance" src="img/ambulance.svg" /><a href="">Brandweer met gepaste spoed </a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16-03-2022 </li>
                        <li>om 16:40</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Brandweer</a>
                      <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
                    </div>
                  </div>
                </div>
                <div class="card card-img">
                  <div class="news-item box-shadow border-radius news-ad-sec min-height-100" :style="image">
                    <div class="news-content">
                      <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
                    </div>
                  </div>
                </div>
                <div class="card other-news box-shadow border-radius-8">
                  <div class="card-content">
                    <h3 class="text-limit-2 d-flex align-item-center"><img class="ambulance" src="img/ambulance.svg" /><a href="">Brandweer met gepaste spoed </a></h3>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> 16-03-2022 </li>
                        <li>om 16:40</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <a href="" class="button btn-more bg-red border-radius-8">Brandweer</a>
                      <a href="" class="button btn-more bg-btngrey border-radius-8">Ongeval</a>
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
import {useStore} from 'vuex';
import moment from 'moment';
export default {

  name: "News",
data(){
    return{
      image:{backgroundImage: `url(${require('../../assets/img/add-img.jpg')})`},
    }
},
  beforeCreate() {
    const store = useStore();
      store.dispatch('newsStores/newsApi');
  },

    computed:{
        news(){
          const store = useStore();
            return store.state.newsStores.news
        }
    },


  methods:{
    dateTime(value) {
          return moment.unix(value).format('hh:mm');
        },
  }

}
</script>

<style scoped>

</style>