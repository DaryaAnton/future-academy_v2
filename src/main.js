import Vue from 'vue'
import App from './App.vue'

import router from './router'

import './assets/scss/style.scss'
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/tab';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
