import Vue from 'vue'
import App from './App.vue'
import './sass/style.sass'


Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
