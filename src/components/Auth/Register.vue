<template>
  <main class="main-content bg-lightgrey">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Create Account</h4>
          <form @submit.prevent="signUp">
            <label>Name</label>
            <input type="text" name="name" v-model="formData.name" class="form-control" required>



            <label>Email</label>
            <input type="email" name="email" v-model="formData.email"  class="form-control" required>

            <label>Password</label>
            <input type="password" name="password"  v-model="formData.password" class="form-control" required>

            <button type="submit" class="button " style="margin-top: 5px;margin-bottom: 5px;">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import {isAuth} from "@/helpers/auth";


export default {
  name: "Register",
  data(){
    return{
        formData:{
          name:'',
          email:'',
          password:'',
        }
    }
  },
  created() {
    if(isAuth()){
      this.$router.push('nieuws');
    }
  },
  methods:{
    signUp(){
        axios.post(`${process.env.VUE_APP_BACKEND_URL}/user/sign-up`,this.formData)
            .then((response)=>{
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