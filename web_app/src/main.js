import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import {VueMasonryPlugin} from 'vue-masonry'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    error: require('../src/assets/img/moren.jpg'),
    loading: require('../src/assets/img/loging.gif')
})
Vue.use(VueMasonryPlugin)
NutUI.install(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
