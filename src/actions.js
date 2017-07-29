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
