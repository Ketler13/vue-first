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
    excercises: null,
    details: [],
    excercisesInSplit: []
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
    },
    addExcerciseToSplit (state, title) {
      state.details.push(title)
    },
    removeExcerciseFromSplit (state, title) {
      state.details = state.details.filter(detail => detail !== title)
    },
    addSetToSplit (state, {title, weight, times}) {
      const isExcerciseInsplit = state.excercisesInSplit.length && state.excercisesInSplit.find(
        excercise => excercise.name === title
      )

      const value = weight + 'x' + times

      if (!isExcerciseInsplit) {
        state.excercisesInSplit
          .push({name: title, sets: [value]})
      } else {
        state.excercisesInSplit = state.excercisesInSplit
          .map(e => (
            e.name === title
            ? {...e, sets: e.sets.concat(value)}
            : e
          ))
      }
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
