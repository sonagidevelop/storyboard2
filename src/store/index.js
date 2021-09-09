import { createStore } from 'vuex'

export default createStore({
  state: {
    loginstatus: false,
    usingservice: false
  },
  mutations: {
    togglelogin(state) {
      state.loginstatus = !state.loginstatus
    },
    toggleservice(state){
      state.usingservice = !state.usingservice
    }
  },
  actions: {
  },
  modules: {
  }
})
