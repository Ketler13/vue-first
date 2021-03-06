import Vue from 'vue'
import Vuex from 'vuex'

import { _login, _signup, _loadexc, _add, _loadSplits, _addExcercise } from '@/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    user: null,
    token: null,
    isLogged: false,
    excercises: null,
    details: [],
    excercisesInSplit: [],
    splits: [],
    loadingSplits: false
  },
  mutations: {
    setToken (state, result) {
      if (result.data.success) {
        state.token = result.data.token
        state.isLogged = true
        state.user = result.data.user
      }
    },
    signUp (state, result) {
      console.log(result)
    },
    setExcercises (state, result) {
      state.excercises = result.data.excercises
    },
    setSplits (state, result) {
      state.splits = result.data
      state.loadingSplits = false
    },
    logout (state) {
      state.email = ''
      state.password = ''
      state.token = null
      state.isLogged = false
      state.excercises = null
      state.details = []
      state.excercisesInSplit = []
      state.splits = []
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
    },
    removeExcerciseByChips (state, title) {
      state.excercisesInSplit = state.excercisesInSplit.filter(
        e => e.name !== title
      )
    },
    refreshStore (state) {
      state.details = []
      state.excercisesInSplit = []
    },
    removeSplit (state, id) {
      state.splits = state.splits
        .filter(split => split.id !== id)
    },
    setRateToSplit (state, {id, rate}) {
      state.splits = state.splits
        .map(split => (
          split.id === id
          ? {...split, mark: rate}
          : split
        ))
    }
  },
  actions: {
    async logIn ({commit}, payload) {
      commit('setToken', await _login(payload))
    },
    async signUp ({commit}, payload) {
      commit('signUp', await _signup(payload))
    },
    async loadExcercises ({commit, state}) {
      commit('setExcercises', await _loadexc(state.token))
    },
    async addSplit ({state}) {
      const now = new Date()
      const date = now.toLocaleDateString()
      const split = {
        excercises: state.excercisesInSplit,
        mark: '0',
        date,
        user: state.user.id
      }
      return await _add(split, state.token)
    },
    async loadSplits ({commit, state}) {
      state.loadingSplits = true
      commit('setSplits', await _loadSplits(state.token, state.user.id))
    },
    async addExcercise ({dispatch, state}, data) {
      const result = await _addExcercise(state.token, data)
      result.data.success && dispatch('loadExcercises')
    }
  }
})

export default store
