import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: store.state.ui.darkTheme
  }
})
