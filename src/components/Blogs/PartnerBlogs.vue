<template>
  <main class="main-content bg-lightgrey">
    <!-- / Step Section-->
    <section class="page-content details-page sec-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>Met ons blog haal je meer uit je internet</h1>

            <p>Haal alles uit je internet met betrouwbare artikelen van onze experts. We helpen je met informatie over je internetverbinding en thuisnetwerk. Lees goede tips over het instellen van je apparaten, software en diensten die met het internet verbonden zijn.</p>
          </div>
          <div class="col-md-4">
            <img src="https://p2000.net/img/blog-banner.png
">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">

            <div class="col-md-4" v-for="item in partnerBlogs" :key="item.id">
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-thumb">
                  <img :src="storageUrl + item.images" alt="nieuws foto">

                </div>
                <div class="card-content">


                  <h6 class="text-limit-2"><router-link :to="'/partnerbijdrage/' + item.slug + '/'+ item.id">{{item.blog_title}}</router-link></h6>
                  <p>{{item.description.substr(0,100)+"..."}}</p>
                  <div class="meta">
                    <ul class="inline-list">
                      <li><a href=""><span class="link___fXYli">Lees meer
                                            <svg width="6" height="10" viewBox="0 0 6 10"><path d="M.348 1.152a.522.522 0 00-.012.71L3.25 5 .336 8.139a.52.52 0 00.012.709l.804.804a.467.467 0 00.686-.028l3.824-4.248a.572.572 0 000-.752L1.838.376a.472.472 0 00-.686-.028l-.804.804z" fill="#FB4A3F" fill-rule="evenodd"></path></svg></span></a></li>






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
    </section>
    <!-- / Step Section-->
  </main>
</template>

<script>
import {useStore} from 'vuex'
export default {
  name: "PartnerBlogs",

  data(){
    return{
      storageUrl : process.env.VUE_APP_LARAVEL_URL
    }
  },
  beforeCreate() {
      const store = useStore();
      store.dispatch('PartnerBlogStore/partnerBlogsAPI')
  },
  computed:{
      partnerBlogs(){
          const store = useStore();
          return store.state.PartnerBlogStore.partnerBlogs
      }
  }
}
</script>

<style scoped>

</style>