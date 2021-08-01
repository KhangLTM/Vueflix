import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import store from "./store";
import Vueyoutube from "vue-youtube"
import router from "./router"
import "vue-awesome/icons/flag"
import "vue-awesome/icons"
import VueToast from "vue-toast-notification"
import "vue-toast-notification/dist/theme-sugar.css"

Vue.config.productionTip = false
Vue.use(Vueyoutube)
Vue.use(VueToast)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

