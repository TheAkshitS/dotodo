import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import globalMixin from './mixins/global'
import './filters'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.mixin(globalMixin)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
