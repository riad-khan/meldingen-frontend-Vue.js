<template>


  <main class="main-content bg-dark-white">
    <!-- / page content-->
    <section class="page-content contact-page sec-padding">
      <div class="grey-bg"></div>
      <div class="container">
        <div class="contact-form box-shadow border-radius-8">
          <div class="row">

            <div class="col-md-6 ">
              <div class="contact_left text-left">
                <h2>Contactformulier</h2>
                <p>Meldingen.nl helpt u graag. Via onderstaand formulier kunt u contact met ons opnemen. Indien nodig zullen wij uw mail zo snel mogelijk beantwoorden. Vergeet niet uw accountnaam te vermelden als u specifieke vragen heeft over uw account.</p>

                <h4>Of bereik ons via:</h4>
                <ul class="social dark-white white-dark d-block">
                  <li><a href=""><span class="icon-Instagram"></span> <span class="text">Instagram (@meldingen.nl)</span></a></li>
                  <li><a href=""><span class="icon-twitter"><span class="path1"></span><span
                          class="path2"></span></span> <span class="text">Twitter (@meldingen.nl)</span></a></li>
                  <li><a href=""><span class="icon-facebook"><span class="path1"></span><span
                          class="path2"></span></span><span class="text"> Facebook (meldingen.nl)</span></a></li>

                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form_area box-shadow border-radius">
                <form @submit.prevent="sendMessage">
                  <div class="form-group">
                    <input type="text" placeholder="name" name="name" v-model="formData.name" class="form-control"
                      required>
                  </div>



                  <div class="form-group">
                    <input type="email" name="email" placeholder="email" v-model="formData.email" class="form-control"
                      required>
                  </div>

                  <div class="form-group">
                    <textarea v-model="formData.message" placeholder="Message"></textarea>

                  </div>
                  <button type="submit" class="button btn-full">Verzend mijn bericht</button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    <!-- / page content-->
  </main>

</template>


<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/contact`, this.formData)
        .then((response) => {
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            text: response.data,
          });
          this.formData = {
            name: '',
            email: '',
            message: ''
          }
        })
        .catch((error) => {
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
            text: error.response.data,
          });
        })
    }
  }
}
</script>

<style scoped>

</style>