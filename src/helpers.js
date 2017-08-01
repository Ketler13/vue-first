import axios from 'axios'

export const _checkName = name => (
  axios({
    method: 'post',
    url: 'http://127.0.0.1:3000/api/checkName',
    data: JSON.stringify({name}),
    headers: {
      'content-type': 'application/json'
    }
  })
)

export const _checkEmail = email => (
  axios({
    method: 'post',
    url: 'http://127.0.0.1:3000/api/checkEmail',
    data: JSON.stringify({email}),
    headers: {
      'content-type': 'application/json'
    }
  })
)

export const _setRate = (rate, id, token) => (
  axios({
    method: 'patch',
    url: `http://127.0.0.1:3000/api/splits/${id}`,
    headers: {
      'content-type': 'application/json',
      token
    },
    data: {
      rate
    }
  })
)

export const _removeSplit = (id, token) => (
  axios({
    method: 'delete',
    url: `http://127.0.0.1:3000/api/splits/${id}`,
    headers: {
      'content-type': 'application/json',
      token
    }
  })
)

/* eslint-disable no-useless-escape */
export const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
