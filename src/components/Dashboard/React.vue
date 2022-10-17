<template>
  <main class="main-content bg-dark-white">
    <section data-aos="zoom-in-down"  data-aos-once="true" class="page-content contact-page my-account-page sec-padding ">

      <div class="container">
        <div class="content-box contact-form box-shadow border-radius-8">
          <div class="row">
          <DashboardLinks />

            <div class="col-lg-8 col-md-8 col-sm-8 sidebar-border">
              <div class="mac-content">

                <div class="row">
                  <div class="col-md-12">
                    <h4>My reacties</h4>
                    <table class="table table-responsive table-bordered">
                      <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Reacties</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(item, i) in comments">
                        <td>{{item.posted_at}}</td>
                        <td class="text-left"><strong>{{item.title}}</strong><hr/>{{item.comments}}</td>
                        <td>{{item.status === 1 ? "published":"pending"}}</td>
                        <td>
                          <a @click.prevent = "deleteComments(item.id)" class="btn btn-danger btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FB4A3F" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>
                          </a>
                        </td>
                      </tr>
                      </tbody>
                      <tfoot>

                      </tfoot>
                    </table>
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
import DashboardLinks from "@/components/Dashboard/Dashboard-links";
import AOS from "aos";
import 'aos/dist/aos.css';
import {isAuth} from "@/helpers/auth";
import axios from "axios";
import moment from "moment/moment";
export default {
  name: "React.vue",
  components: {DashboardLinks},
  data(){
    return{
        comments:[],
      formData : {
          id: '',
          user_id :''
      }
    }
  },
  created() {
    if(!isAuth()){
      this.$router.push('/login')
    }
    AOS.init();
    this.fetchComments();
  },

  methods:{
    fetchComments(){
      const id = localStorage.getItem('id');
      axios.get(`${process.env.VUE_APP_BACKEND_URL}/user/comments/32`,{
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
          .then(response=>{
            this.comments = response.data
          })
          .catch(error =>{
            console.log(error)
          })

    },
    DateTime(value){
      return moment(value,"MM-DD-YYYY");
    },
    deleteComments(id){

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(`${process.env.VUE_APP_BACKEND_URL}/user/delete-comments/${id}/${localStorage.getItem('id')}`,{
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
              .then((response)=>{
                this.$swal(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                ).then(function() {
                  location.reload()
                });

              }).catch(error=>{
            console.log(error)
          })

        }
      })
    }
  }
}
</script>

<style scoped>
table hr{
  margin:5px 0px;
}
table a svg{
  max-width: 15px;
}
</style>