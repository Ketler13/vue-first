import Vue from 'vue'
import Vuex from 'vuex'

import { login, signup, loadexc } from '@/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    token: null,
    isLogged: false,
    excercises: null
  },
  mutations: {
    setToken (state, result) {
      if (result.data.success) {
        state.token = result.data.token
        state.isLogged = true
      }
    },
    signUp (state, result) {
      console.log(result)
    },
    setExcercises (state, result) {
      state.excercises = result.data.excercises
    },
    logout (state) {
      state.token = null
      state.isLogged = false
      state.excercises = null
    }
  },
  actions: {
    async logIn ({commit}, payload) {
      commit('setToken', await login(payload))
    },
    async signUp ({commit}, payload) {
      commit('signUp', await signup(payload))
    },
    async loadExcercises ({commit, state}) {
      commit('setExcercises', await loadexc(state.token))
    }
  }
})

export default store
