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
                    <form method="post" action="/update-account" class="edit-profile">
                      <input type="hidden" name="_token" value="Bg6aCMNYLAKWNeRan1JpVdaeRudECVEocdmOw3yl">            <h4>Edit profile</h4>
                      <div class="form-group">
                        <input id="name" value="Admin" type="text" name="name" placeholder="Name *" required autocomplete="off">
                      </div>
                      <div class="form-group">
                        <input id="email" value="admin@admin.com" type="text" readonly placeholder="Email *" required autocomplete="off">
                      </div>
                      <div class="form-group">
                        <input id="password1" name="password" value="" type="text" placeholder="Password" autocomplete="off">
                      </div>
                      <div class="form-group">
                        Disable Recaptcha? <input id="captcha" name="captcha" value="1" type="checkbox" >
                      </div>
                      <div class="btn-submit mb-3">
                        <button class="button btn-sumit btn-full mt-10" type="submit">Update</button>
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

export default {
  name: "Edit-Profile.vue",
  components: {DashboardLinks},
  created() {
    AOS.init();
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>