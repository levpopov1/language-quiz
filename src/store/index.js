import Vue from 'vue'
import Vuex from 'vuex'
import Alphabet from './modules/alphabet'
import Quiz from './modules/quiz'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Alphabet,
    Quiz
  }
})
