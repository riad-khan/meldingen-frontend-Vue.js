<template>
  <div>
    <!--Header-->
    <div id="mobileSidenav" class="sidenav">
      <div class="sidenav-header">
        <div class="logo">
          <h1><router-link to="/"><img src="../../assets/img/logo.svg" alt="" /></router-link></h1>
        </div>
        <div class="close-sec">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><img src="img/icon-close.svg"></a>
        </div>
      </div>
      <div class="menu-mobile">
        <ul>
          <li class="active"><a href="#"><span>Meldingen</span></a></li>
          <li><a href="#"><span>Nieuws</span></a></li>
          <li><a href="#"><span>Contact</span></a></li>
          <li><a href="#"><span>Account</span></a></li>
          <!--
          <li><a href="#">
            <span class="icon-user">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" fill="#404040"/></svg>
            </span> Account</a>
          </li>
          <li>
            <div class="theme-swapper">
              <label class="switch">
                <input type="checkbox" class="switcher">
                <span class="slider"></span>
              </label>
            </div>
          </li>
  -->
        </ul>
      </div>
    </div>
    <header class="header-area sec-padding bg-theme">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-4 col-xs-8">
            <div class="logo">
              <h1><router-link to="/"><img src="../../assets/img/logo.svg" alt="" /></router-link></h1>
            </div>
          </div>
          <div class="col-md-8 col-xs-4 textright">
            <div class="menu">
              <button class="openNav box-shadow" onclick="openNav()"><img src="img/icon-hamburger.svg"></button>
              <ul>
                <li :class="currentRouteName === 'meldingen' ? 'active':''" ><router-link to="/">Meldingen</router-link></li>
                <li :class="currentRouteName === 'nieuws' ? 'active':''"><router-link to="/nieuws">Nieuws</router-link></li>
                <li :class="currentRouteName === 'contact' ? 'active':''"><router-link to="/contact">Contact</router-link></li>
                <li v-if="isAuth" :class="currentRouteName === 'account' ? 'active':''">
                  <router-link to="/dashboard"><span>Profile</span></router-link>
                </li>
                <li v-else :class="currentRouteName === 'login' ? 'active':''">
                  <router-link to="/login" ><span>Account</span></router-link>
                </li>
                <!--
                <li><a href="#">
                  <span class="icon-user">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C10.21 0 12 1.79 12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"/></svg>
                  </span> Account</a>
                </li>
                <li class="list-switcher">
                  <div class="theme-swapper">
                    <label class="switch">
                      <input type="checkbox" class="switcher">
                      <span class="slider round"></span>
                    </label>
                  </div>
                </li>
  -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <span class="icon-facebook"></span>
  </div>
</template>

<script>
import {isAuth} from "@/helpers/auth";



export default {
  name: "Header",
  data(){
    return{
      isAuth: isAuth(),
    }
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }

}
</script>

<style scoped>

</style>