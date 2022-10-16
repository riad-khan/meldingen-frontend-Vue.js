<template>
  <main class="main-content bg-lightgrey">
      <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4>Login Form</h4>
              <form @submit.prevent="login">
                <label>Email</label>
                <input type="email" name="email" v-model="form.email" class="form-control">

                <label>Password</label>
                <input type="password" name="password" v-model="form.password" class="form-control">
                <button type="submit" class="button " style="margin-top: 5px;margin-bottom: 5px;">Login</button>
                
             
                      <a href="http://localhost:3000/auth/google" target="_blank" style="margin-left:8px;margin-top:2px;" class="button ">

                        <img src="https://img.icons8.com/ios/18/000000/google-logo--v1.png"/>
                        Sign in with Google
                      </a>

                      <a href="http://localhost:3000/auth/facebook" target="_blank" style="margin-left:8px;margin-top:2px;" class="button ">

                        <img src="https://img.icons8.com/fluency/20/40C057/facebook-new.png"/>
                        Sign in with Facebook
                      </a>
                  
             

              </form>
            </div>
          </div>
      </div>
  </main>
</template>

<script>
import axios from "axios";
import jwtDecode from "jwt-decode";
import {isAuth} from "@/helpers/auth";


export default {
  name: "login",

  data(){
    return{
     form:{
       email:'',
       password:'',
     },

    }
  },

  created() {
    if(isAuth()){
      this.$router.push('nieuws');
    }

    if(this.$route.query.token){
      const {name,email,id} = jwtDecode(this.$route.query.token);
              localStorage.setItem('token',this.$route.query.token);
              localStorage.setItem('name',name);
              localStorage.setItem('email',email);
              localStorage.setItem('id',id);

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

  methods:{
    login(){
      axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/sign-in`,this.form)
          .then(( response )=>{
            const {name,id} = jwtDecode(response.data.access_token);
              localStorage.setItem('token',response.data.access_token);
              localStorage.setItem('name',name);
              localStorage.setItem('id',id);
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
          .catch((error)=>{
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