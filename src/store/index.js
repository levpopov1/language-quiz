import Vue from 'vue'
import Vuex from 'vuex'
import Alphabet from './modules/alphabet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Alphabet
  }
})
