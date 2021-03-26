import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: ['red', 'yellow', 'green'],
    nextColor: null,
    direction: 1 // 1 = от красного к зелёному, -1 = обратно.
  },
  mutations: {
    setNextColor(state, currentColor) {
      const currentColorIndex = state.colors.indexOf(currentColor)
      if (currentColorIndex + state.direction === state.colors.length || currentColorIndex + state.direction < 0) {
        state.direction *= -1
      }
      state.nextColor = state.colors[currentColorIndex + state.direction]
    }
  },
  actions: {
  },
  modules: {
  }
})
