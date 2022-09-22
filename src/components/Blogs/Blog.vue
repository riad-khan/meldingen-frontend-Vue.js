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
        <div style="margin-bottom: 35px;">

          <div style="margin-left: 20px;">
            Categories :
            <router-link class="button mb-5 " :to="'/blogs'">All Blogs</router-link>
            <router-link class="button" style="margin-left: 5px;" v-for="(item,i) in categories" :key="i" :to="'/blogs/category/'+item.slug + '/' + item.id">{{item.category_name}}</router-link>

             </div>


        </div>
        <div class="row">
          <div class="col-md-12">

            <div class="col-md-4" v-for="blog in blogs" :key="blog.id" >
              <div class="card other-news box-shadow border-radius-8">
                <div class="card-thumb">
                  <img :src="storageUrl + blog.images" alt="nieuws foto">

                </div>
                <div class="card-content">


                  <h6 class="text-limit-2"><router-link :to="'/blogs/' +blog.slug + '/'+ blog.id">{{blog.blog_title}}</router-link></h6>
                  <p>{{blog.description.substr(0,100)+"..."}}</p>
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
  name: "Blog",
  data(){
    return{
      storageUrl : process.env.VUE_APP_LARAVEL_URL
    }
  },

  beforeCreate() {
      const store = useStore();

      store.dispatch('BlogStore/blogApi')
      store.dispatch('BlogStore/blogCategory')
  },
  computed:{
    blogs(){
      const store = useStore();
      return store.state.BlogStore.blogs
    },
    categories(){
      const store = useStore();
      return store.state.BlogStore.category
    }
  }
}
</script>

<style scoped>

</style>