import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import "./plugins/avue";
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
