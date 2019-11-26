// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'



import 'view-design/dist/styles/iview.css';
import { post, fetch, patch, put } from './request/http.js'
import store from './store'

Vue.use(ViewUI);
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
