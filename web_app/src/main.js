import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import {VueMasonryPlugin} from 'vue-masonry'
Vue.use(VueMasonryPlugin)
NutUI.install(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
