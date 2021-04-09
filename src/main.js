import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';


Vue.config.productionTip = false

Vue.use(VueCarousel);
AOS.init({
  offset: 80,
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
