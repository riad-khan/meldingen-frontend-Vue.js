 <template>


   <main class="main-content bg-dark-white">
     <!-- / page content-->
     <section class="page-content contact-page sec-padding">

       <div class="container">
         <div class="contact-form box-shadow border-radius-8">
            <div class="row">

                  <div class="col-md-6 ">
                   <div class="text-left">
                     <h2 >Contact From</h2>
                     <p>Meldingen.nl helpt u graag. Via onderstaand formulier kunt u contact met ons opnemen. Indien nodig zullen wij uw mail zo snel mogelijk beantwoorden.</p>
                   </div>
                  </div>
                <div class="col-md-6 box-shadow border-radius-8">
                  <form @submit.prevent="sendMessage" style="padding-top: 20px;" >

                    <div class="form-group" >
                    <input type="text" placeholder="name" name="name" v-model="formData.name" class="form-control" required>
                    </div>



                    <div class="form-group" >
                    <input type="email" name="email" placeholder="email" v-model="formData.email"  class="form-control" required>
                    </div>

                    <div class="form-group" >
                    <textarea v-model="formData.message" placeholder="Message"></textarea>

                    </div>
                    <button type="submit"  class="button " style="margin-top: 5px;width:100%;margin-bottom: 8px;">Verzend mijn bericht</button>
                  </form>
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