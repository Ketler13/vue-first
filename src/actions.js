import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api/'

export const login = payload => {
  const url = BASE_URL + 'login'

  return axios({
    method: 'post',
    url,
    data: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
}

export const signup = payload => {
  const url = BASE_URL + 'register'

  return axios({
    method: 'post',
    url,
    data: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    }
  })
}

export const loadexc = (token) => {
  const url = BASE_URL + 'excercises'

  return axios({
    method: 'get',
    url,
    headers: {
      'content-type': 'application/json',
      token
    }
  })
}

export const add = (split, token) => {
  const url = BASE_URL + 'addSplit'

  return axios({
    method: 'post',
    url,
    data: JSON.stringify(split),
    headers: {
      'content-type': 'application/json',
      token
    }
  })
}

export const _loadSplits = (token, user) => {
  const url = BASE_URL + 'splits'

  return axios({
    method: 'post',
    url,
    data: {
      user
    },
    headers: {
      'content-type': 'application/json',
      token
    }
  })
}

export const _addExcercise = (token, data) => {
  const url = BASE_URL + 'addexcercise'

  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'content-type': 'application/json',
      token
    }
  })
}
