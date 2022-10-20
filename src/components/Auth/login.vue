<template>
  <main class="main-content bg-lightgrey">
    <div class="page-content my-account login sec-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="my-acc-sec text-center">
              <h2>Log in op je account</h2>
              <div class="my-acc-form form-area contact-box box-shadow border-radius bg-white-gray text-left">
                <form @submit.prevent="login">
                  <div class="form-group">
                    <input type="email" name="email" v-model="form.email" class="form-control" placeholder="E-mail adres">
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Wachtwoord">
                  </div>

                  <div class="btn-group">
                    <button type="submit" class="button btn-submit btn-full mt-10">Inloggen</button>
                    <a href="http://localhost:3000/auth/google" target="_blank"
                      class="button btn-submit btn-full"> <img src="../../assets/img/google-icon.svg" />
                      Sign in with Google
                    </a>

                    <a href="http://localhost:3000/auth/facebook" target="_blank" class="button btn-submit btn-full mt-10"><img src="../../assets/img/facebook-icon.svg" />
                      Sign in with Facebook
                    </a>
                  </div>
                </form>
                <div class="text-center mt-20">
                  <a href="">Wachtwoord vergeten?</a>
                </div>
              </div>
              <div class="text-center mt-20">
                  <a href="" class="underline">Nieuw account aanmaken</a>
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
import jwtDecode from "jwt-decode";
import { isAuth } from "@/helpers/auth";


export default {
  name: "login",

  data() {
    return {
      form: {
        email: '',
        password: '',
      },

    }
  },

  created() {
    if (isAuth()) {
      this.$router.push('nieuws');
    }

    if (this.$route.query.token) {
      const { name, email, id } = jwtDecode(this.$route.query.token);
      localStorage.setItem('token', this.$route.query.token);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('id', id);

      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        text: 'Logged In successful',
      });
      window.location.href = '/';
    }
  },

  methods: {
    login() {
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/sign-in`, this.form)
        .then((response) => {
          const { name, id } = jwtDecode(response.data.access_token);
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('name', name);
          localStorage.setItem('id', id);
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            text: 'Logged In successful',
          });
          this.$router.push('nieuws');
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