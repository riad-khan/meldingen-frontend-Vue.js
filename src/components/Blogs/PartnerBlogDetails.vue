<template>
  <main class="main-content bg-dark-white">
    <!-- / Step Section-->
    <section class="page-content details-page sec-padding">
      <div class="container">
        <div class="breadcrumbs desktop-only">
          <ul class="inline-list">
            <li><a href="/">Home</a><span class="right-angel">&gt;</span></li>
            <li><router-link to="/partnerbijdrage/">partnerbijdrage</router-link><span class="right-angel">&gt;</span></li>
            <li>
              {{blogDetails.slug}}
            </li>
          </ul>
        </div>
        <div class="row with-sidebar">
          <div class="col-md-12 pt-30 m-pt-0">
            <div class="card card-overlay other-news box-shadow border-radius">
              <div class="card-thumb">
                <img class="desktop-only" :src="storageUrl + blogDetails.images" alt="nieuws image">
                <img class="mobile-only" :src="storageUrl + blogDetails.images" alt="nieuws image">

              </div>
              <div class="card-content card-img-overlay">
                <div class="btn-group">
                </div>
                <h1 class="text-limit-2 mt-10 m-mt-0 t-mt-0">{{blogDetails.blog_title}}</h1>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9 col-xs-12">
            <div class="content">
              <div class="meta">
                <div class="row d-flex align-items-center meta-group">
                  <div class="col-md-8 col-lg-6 col-xs-6">
                    <ul class="inline-list">
                      <li><span class="icon-clock"></span> Posted at {{DateTime(blogDetails.created_at)}} </li>


                    </ul>

                  </div>

                </div>
              </div>
              <p><strong>{{blogDetails.description}}</strong></p>
              <div v-html="blogDetails.content"></div>

            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-xs-12">
            <div class="sidebar">
              <h3 class="weight-500"> Andere berichten</h3>
              <div id="news_list">





                <div class="card mobile-col-2 other-news box-shadow border-radius-8" v-for="(item, i) in recentBlogs" :key="i">
                  <div class="card-thumb">
                    <img class="desktop-only" :src="storageUrl + item.images" alt="nieuws image">
                    <img class="mobile-only" src="https://p2000.net/images/blog/1743641253507788.jpg" alt="nieuws image">
                  </div>
                  <div class="card-content">

                    <h2><router-link :to="'/partnerbijdrage/'+ item.slug + '/' + item.id">{{item.blog_title.length > 25 ? item.blog_title.substr(0,25) + '...': item.blog_title}}</router-link></h2>
                    <div class="meta">

                      <p>{{item.description.substr(0,100) + '...'}}</p>


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
export default {
  name: "PartnerBlogDetails",
  data(){
    return{
        storageUrl : process.env.VUE_APP_LARAVEL_URL,
      image:{backgroundImage: `url(${require('../../assets/img/add-img.jpg')})`},
    }
  },

  beforeCreate() {
      const store = useStore();
      store.dispatch('PartnerBlogStore/partnerBlogDetails',this.$route.params.id);
      store.dispatch('PartnerBlogStore/recentBlogs')
  },
  computed:{
      blogDetails(){
          const store = useStore();
          return store.state.PartnerBlogStore.blogDetails[0]
      },
    recentBlogs(){
        const store = useStore();
        return store.state.PartnerBlogStore.recentBlogs;
    }
  },
  methods:{
      DateTime(value){
        return moment(value).format('hh:mm')
      }
  }

}
</script>

<style scoped>

</style>