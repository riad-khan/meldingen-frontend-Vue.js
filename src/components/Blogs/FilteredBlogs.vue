<template>
  <main class="main-content bg-lightgrey">
    <!-- / Step Section-->
    <section class="page-content details-page sec-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>{{category[0].category_title}}</h1>

            <p>{{category[0].short_description}}</p>
          </div>
          <div class="col-md-4">
            <img :src="storageUrl + category[0].images">
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

import {useStore} from 'vuex';
export default {
  name: "FilteredBlogs",
  data(){
    return{
      storageUrl : process.env.VUE_APP_LARAVEL_URL
    }
  },

  beforeCreate() {
    const id  = this.$route.params.id;
    const store = useStore();
    store.dispatch('BlogStore/filteredBlogs',id);
    store.dispatch('BlogStore/blogCategory')
  },
  computed:{
    blogs(){
      const store = useStore();
      return store.state.BlogStore.filteredBlogs
    },
    category(){
      const id  = this.$route.params.id;
      const store = useStore();
      return store.state.BlogStore.category.filter((item, i)=>{
          return item.id == id
      })
    }
  }

}
</script>

<style scoped>

</style>