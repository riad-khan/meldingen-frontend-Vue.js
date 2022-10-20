<template>
  <main class="main-content bg-lightgrey">
    <div class="page-content my-account register sec-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="my-acc-sec text-center">
              <h2>Nieuw account aanmaken</h2>
              <div class="my-acc-form form-area contact-box box-shadow border-radius bg-white-gray text-left">
                <form @submit.prevent="signUp">
                  <div class="form-group">
                    <input type="text" name="name" v-model="formData.name" class="form-control" required placeholder="Voornaam">
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" v-model="formData.email" class="form-control" required placeholder="E-mailadres">
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" v-model="formData.password" class="form-control" required placeholder="Wachtwoord">
                  </div>
                  <div class="btn-group">
                    <button type="submit" class="button btn-submit btn-full mt-10 mb-0">Maak account aan</button>
                  </div>
                </form>
              </div>
              <div class="text-center mt-20">
                  <a href="" class="underline">Naar inloggen</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { isAuth } from "@/helpers/auth";


export default {
  name: "Register",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  created() {
    if (isAuth()) {
      this.$router.push('nieuws');
    }
  },
  methods: {
    signUp() {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/sign-up`, this.formData)
        .then((response) => {
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            text: response.data,
          });

          this.$router.push('login')
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