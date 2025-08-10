import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import './assets/global.css'
// es2015 module
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
//Vue.use(VueAxios, axios)

Vue.config.productionTip = false
//window.$ = window.jQuery = require('jquery')



new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
