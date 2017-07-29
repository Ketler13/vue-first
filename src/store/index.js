import Vue from 'vue'
import Vuex from 'vuex'

import { login } from '@/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    token: null
  },
  mutations: {
    setToken (state, payload) {
      console.log(payload)
    }
  },
  actions: {
    async login ({commit}, email, password) {
      commit('setToken', await login(email, password))
    }
  }
})

export default store
