import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueAos from 'vue-aos';
import { createHead } from "@vueuse/head"

const head = createHead()

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSweetalert2);
app.use(VueAos);
app.use(head);
app.mount('#app')
