import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import OfficeUIFabricVue from 'office-ui-fabric-vue'
import 'office-ui-fabric-vue/dist/index.css'

Vue.use(Vuex)
Vue.use(OfficeUIFabricVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
