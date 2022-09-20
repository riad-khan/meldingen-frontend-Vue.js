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
    }else{
      this.$router.push('login');
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