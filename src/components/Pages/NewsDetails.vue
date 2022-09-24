<template>
    {{newsDetails}}
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: "NewsDetails",
  beforeCreate() {
    const store = useStore();
    const id = this.$route.params.id
      store.dispatch('newsStores/newsDetails',id);
  },
  computed:{
      newsDetails(){
        const store = useStore();
          return store.state.newsStores.newsDetails[0]
      }
  }
}
</script>

<style scoped>

</style>