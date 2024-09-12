import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
// import 'virtual:unocss-devtools'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

function bootstrap() {
  Vue.config.productionTip = false

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    render: h => h(App),
  })
}

bootstrap()
