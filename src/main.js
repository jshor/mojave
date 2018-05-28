import Vue from 'vue'
import App from './App.vue'
import OfficeUIFabricVue from 'office-ui-fabric-vue';

// import css style
import 'office-ui-fabric-vue/dist/index.css';

Vue.use(OfficeUIFabricVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
