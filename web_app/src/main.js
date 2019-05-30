import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import {VueMasonryPlugin} from 'vue-masonry'
import VueLazyload from 'vue-lazyload'
import imgUrl from '../src/imgUrl'
import Bus from '../src/bus'
Vue.use(VueLazyload,{
    error: require('../src/assets/img/moren.jpg'),
    loading: require('../src/assets/img/moren.jpg'),
})
Vue.use(imgUrl)
Vue.use(VueMasonryPlugin)
NutUI.install(Vue)
Vue.config.productionTip = false
Vue.prototype.$imgUrl = imgUrl
Vue.prototype.$Bus = Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
