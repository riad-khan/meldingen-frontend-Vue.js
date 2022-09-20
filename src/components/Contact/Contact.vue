 <template>
    <main class="main-content bg-lightgrey">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4>Contact with us</h4>
            <form @submit.prevent="sendMessage">
              <label>Name</label>
              <input type="text" name="name" v-model="formData.name" class="form-control" required>



              <label>Email</label>
              <input type="email" name="email" v-model="formData.email"  class="form-control" required>

              <label>Message</label>
              <textarea v-model="formData.message"></textarea>

              <button type="submit" class="button " style="margin-top: 5px;margin-bottom: 5px;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </template>


<script>
import axios from "axios";

export default {
  name: "Contact",
  data(){
    return{
      formData:{
        name:'',
        email:'',
        message:''
      }
    }
  },
  methods:{
      sendMessage(){
          axios.post(`${process.env.VUE_APP_BACKEND_URL}/contact`,this.formData)
              .then((response)=>{
                this.$swal({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'success',
                  text: response.data,
                });
                this.formData ={
                  name:'',
                  email:'',
                  message: ''
                }
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