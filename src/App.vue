<template>
    <div>
     <Header />
      <router-view :key="$route.fullPath"></router-view>
      <Footer />
    </div>
</template>

<script>
import AboutView from "@/views/AboutView";
import Header from "@/components/Includes/Header";
import Footer from "@/components/Includes/Footer";

export default {
  components: {Footer, Header, AboutView},
  data(){
    return{

    }
  }
}
</script>
<style>

</style>