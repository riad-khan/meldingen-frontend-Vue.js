<template>
  <main class="main-content bg-white">
    <section data-aos="fade-up" data-aos-delay="200" data-aos-once="true" class="page-content contact-page my-account-page sec-padding ">

      <div class="container">
        <div class="content-box contact-form box-shadow border-radius-8">
          <div class="row">
         <DashboardLinks />

            <div class="col-lg-8 col-md-8 col-sm-8 sidebar-border">
              <div class="mac-content">
                <div class="row">
                  <div class="col-md-12">

                    <div v-if="isLoading === true" style="height: 300px;" :class="isLoading ? 'spin':''"></div>

                    <form v-else method="post" action="">
                      <h4>Edit profile</h4>
                      <div class="form-group">
                        <input id="name"  v-model="formData.name" type="text" name="name" placeholder="Name *" required autocomplete="off">
                      </div>
                      <div class="form-group">
                        <input id="email" :value="formData.email" type="text" readonly placeholder="Email *" required autocomplete="off">
                      </div>
                      <div class="form-group">
                        <input id="password1" name="password" v-model="formData.password"  type="text" placeholder="Password" autocomplete="off">
                      </div>
                      <div class="form-group">
                        Disable Recaptcha? <input id="captcha" name="captcha" v-model="formData.captcha"  type="checkbox" >
                        {{formData.captcha}}
                      </div>
                      <div class="btn-submit mb-3">
                        <button class="button btn-sumit btn-full mt-10" @click.prevent="updateProfile">Update</button>
                      </div>
                    </form>
                  </div>
                </div>                                        </div>
            </div>


          </div>
        </div>
      </div>
    </section>    <!-- / Step Section-->
  </main>
</template>

<script>
import {useStore} from "vuex";

import AOS from "aos";
import 'aos/dist/aos.css';
import DashboardLinks from "@/components/Dashboard/Dashboard-links";
import {isAuth, userInfo} from "@/helpers/auth";
import axios from "axios";

export default {
  name: "Edit-Profile.vue",
  components: {DashboardLinks},
  data(){
      return{
        isLoading : false,
        formData:{
          name: userInfo().name,
          email : userInfo().email,
          password : '',
          captcha: false,
          id: localStorage.getItem('id'),

        }
      }
  },
  created() {

    if(!isAuth()){
      this.$router.push('/login')
    }
    AOS.init();

  },
  methods:{
    updateProfile(){
      this.isLoading = true;
     setTimeout(()=>{
       axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/update/profile`,this.formData,{
         headers: {
           "Content-type": "application/json",
           "Authorization": `Bearer ${localStorage.getItem('token')}`
         }
       })
           .then((response)=>{
             localStorage.removeItem('token');
             this.isLoading = false;
             localStorage.setItem('token',response.data.token)
           })
           .catch((error)=>{
             console.log(error)
           })
     },1000)

    }
  }
}
</script>

<style scoped>

</style>