import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VueYouTubeEmbed);

const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
