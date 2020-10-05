import Vue from 'vue'
import Vuex from 'vuex'
import userx from './modules/userx'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userx,
  },
})
