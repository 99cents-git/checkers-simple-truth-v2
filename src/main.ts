import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import VueGtm from 'vue-gtm';
import VueAnalytics from 'vue-analytics'


// register globally

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.component('multiselect', Multiselect);

const eventBus = new Vue();

Vue.use(VueGtm, {
  id: 'GTM-597TTQ',
  enabled: true,
  debug: true
});

Vue.use(VueAnalytics, {
  id: 'UA-41901849-1'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
