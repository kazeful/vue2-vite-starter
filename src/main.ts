import Vue from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
// import 'virtual:unocss-devtools'

function bootstrap() {
  Vue.config.productionTip = false

  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    render: h => h(App),
  })
}

bootstrap()
