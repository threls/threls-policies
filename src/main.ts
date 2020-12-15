import Vue from 'vue'
import Vuex from 'vuex'
import ThrelsPolicies from './ThrelsPolicies'
import store from './store'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(ThrelsPolicies, { store })

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
