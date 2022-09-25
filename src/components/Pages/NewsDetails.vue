<template>
  <main class="main-content bg-dark-white">
    <!-- / Step Section-->
    <section class="page-content details-page sec-padding">
      <div class="container">
        <div class="breadcrumbs desktop-only">
          <ul class="inline-list">
            <li><a href="/">Home</a><span class="right-angel">&gt;</span></li>
            <li><router-link to="/nieuws/">Nieuws</router-link><span class="right-angel">&gt;</span></li>
            <li>
                {{newsDetails.slug}}
            </li>
          </ul>
        </div>
        <div class="row with-sidebar">
          <div class="col-md-12 pt-30 m-pt-0">
            <div class="card card-overlay other-news box-shadow border-radius">
              <div class="card-thumb">
                <img class="desktop-only" :src="newsDetails.media" alt="nieuws image">
                <img class="mobile-only" src="newsDetails.media" alt="nieuws image">

              </div>
              <div class="card-content card-img-overlay">
                <div class="btn-group">
                </div>
                <h4 class="text-limit-2 mt-10 m-mt-0 t-mt-0" style="color:white">{{ newsDetails.title }}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9 col-xs-12">
            <div class="content">
              <div class="meta">
                <div class="row d-flex align-items-center meta-group">
                  <div class="col-md-8 col-lg-6 col-xs-6">
                    <ul class="inline-list">
                      <li><span class="icon-clock"></span> {{dateTime(newsDetails.timestamp)}} in <span style="color:red" > {{newsDetails.provincie}}</span> , {{newsDetails.regio}} </li>



                    </ul>
                    <span class="weblink">Bron: <a :href="newsDetails.source" target="_blank" rel="nofollow">www.politie.nl</a></span>

                  </div>

                </div>
              </div>
              <p><strong>{{newsDetails.intro}}</strong></p>
              <div v-html="newsDetails.story" ></div>

            </div>

          <!--   comment Section-->

            <div  v-if="!isAuth" class="comment-sec t-mt-20">
              <h2 class="weight-500">Comment On Article</h2>
              <router-link class="button btn-tranparent" to="/login">Sign up to comment</router-link>
            </div>


            <div v-else class="comment-sec t-mt-20">
              <h2 class="weight-500">Reageer op dit artikel</h2>
              <div class="comment-form form-area">
                <form id="commentForm" @submit.prevent="submitComments">
                  <input type="hidden" name="_token" value="mjWwykik7sWQ0ywZdBX33hbSoWuu6ghPSd4W8vs3">                            <div class="form-group">
                  <textarea required="" v-model="message" name="message" placeholder="Schrijf hier je bericht *"></textarea>
                </div>


                  <button  class="button btn-sumit btn-full mt-10" style="background-color: #2B5882 !important;" name="comment_submit">Plaats mijn reactie</button>
                </form>
                <div class="col-md-12">
                  <div class="form-group">
                    <p id="response" style="margin-top: 1rem"></p>
                  </div>
                </div>
              </div>
            </div>


            <div  v-if="!isAuth" style="margin-top: 30px;" class="comment-sec t-mt-20">
              <h2 class="weight-500">Reacties ({{newsComments.length}})</h2>
              <router-link class="button btn-tranparent" to="/login"><span class="icon-user-hear"></span> Bekjik de Reacties</router-link>
            </div>

            <div class="comment-view" v-if="isAuth">
              <div id="comment-area">
                <div class="single-comment mt-30" v-for="(item,i) in newsComments">
                  <h2 class="weight-500 d-flex align-items-center">
                    <span class="user-name">{{ item.name }}</span>
                    <span class="comment-time alignright">{{RelativeDate(item.posted_at)}}</span>
                  </h2>
                  <p>Maandagmiddag 12 september vond er ook een schietincident plaats in de omgeving. Rond 13:00 uur kwam er toen melding vanaf de Prins Mauritssingel in Nijmegen. Vooralsnog is er in die zaak niemand aangehouden. Alle informatie over die zaak is te vinden in dit bericht. Tips blijven welkom.</p>
                </div>
              </div>
              <div class="load-more  text-center">
                <button data-next="7" data-id="35"  class="button btn-tranparent btn-full" style="display: none;">Laad meer reacties</button>
              </div>


            </div>


      <!-- comment Section Ends-->

          </div>
          <div class="col-md-4 col-lg-3 col-xs-12">
            <div class="sidebar">
              <h3 class="weight-500"> Ander Nieuws</h3>
              <div id="news_list">

                <div class="card mobile-col-2 other-news box-shadow border-radius-8" v-for="(item, i) in recentNews" :key="i">
                  <div class="card-thumb">
                    <img class="desktop-only" :src="item.media" alt="nieuws image">
                    <img class="mobile-only" :src="item.media" alt="nieuws image">
                  </div>
                  <div class="card-content">

                    <h6><router-link :to="'/nieuws/'+item.regio_url+'/'+item.provincie+'/'+item.slug+'/'+item.id">{{item.title.length > 25 ? item.title.substr(0,25) + '...': item.title}}</router-link></h6>
                    <div class="meta">
                      <ul class="inline-list">
                        <li><span class="icon-clock"></span> {{dateTime(item.timestamp)}} in &nbsp;</li>
                        <li style="color: darkcyan">{{ item.regio }}</li>
                        <li>{{ item.provincie }}</li>
                      </ul>
                    </div>
                    <div class="btn-group">
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>


        </div>
        <div class="row pt-20">
          <div class="col-md-12">
            <div class="news-item box-shadow border-radius news-ad-sec" :style="image">
              <div class="news-content">
                <h2 class="new-ad-heading">Dit is een placeholder voor reclame</h2>
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
import {isAuth} from "@/helpers/auth";
import axios from "axios";

export default {
  name: "NewsDetails",
  data(){
    return{
      storageUrl : process.env.VUE_APP_LARAVEL_URL,
      image:{backgroundImage: `url(${require('../../assets/img/add-img.jpg')})`},
      isAuth: isAuth(),
        message:'',
      showComments :1,

    }
  },
  beforeCreate() {
    const store = useStore();
    const id = this.$route.params.id
    const token = localStorage.getItem('token');
      store.dispatch('newsStores/newsDetails',id);
      store.dispatch('newsStores/recentNews');
      store.dispatch('commentsStore/getComments',id,token)
  },
  computed:{
      newsDetails(){
        const store = useStore();
          return store.state.newsStores.newsDetails[0]
      },
    recentNews(){
        const store = useStore();
        return store.state.newsStores.recentNews;
    },
    newsComments(){
      const store = useStore();
      return store.state.commentsStore.comments
    }
  },
  methods:{
    dateTime(value) {
      return moment.unix(value).startOf('hour').fromNow();
    },
    RelativeDate(value){
      return moment(value).startOf('hour').fromNow();
    },
    submitComments(){
      const data ={
          news_id : this.$route.params.id,
          comments : this.message,
      }

        const store = useStore();
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/comments/insert-comments`,data,{
        headers:{
          "Content-type" : "application/json",
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
          .then((response)=>{
            this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              icon: 'success',
              text: 'Comments created.Waiting for Approval',
            });

            this.message = '';
          })
          .catch(error =>{
            console.log(error.response)
          })
    }
  }
}
</script>

<style scoped>

</style>