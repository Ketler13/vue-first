import Vue from 'vue'
import Vuex from 'vuex'

import { login, signup } from '@/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    token: null
  },
  mutations: {
    setToken (state, result) {
      if (result.data.success) {
        state.token = result.data.token
      }
    },
    signup (state, result) {
      console.log(result)
    }
  },
  actions: {
    async login ({commit}, payload) {
      commit('setToken', await login(payload))
    },
    async signup ({commit}, payload) {
      commit('signup', await signup(payload))
    }
  }
})

export default store
