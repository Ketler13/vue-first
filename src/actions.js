import axios from 'axios'

const BASE_URL = 'http://http://ketler-ng-glog.herokuapp.com/api/'

export const login = (email, password) => {
  const url = BASE_URL + 'login'

  return axios({
    method: 'post',
    url,
    data: JSON.stringify({email, password}),
    headers: {
      'content-type': 'application/json'
    }
  })
}
