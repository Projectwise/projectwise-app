import axios from 'axios'

axios.default.baseURL = 'http://localhost:3000/api'

export const login = ({email, password}) => {
  return axios.post('/login', {
    email,
    password
  })
}

export const setAuthHeaders = (token) => {
  axios.defaults.headers.common['Authorization'] = token
}
