import axios from 'axios'

const defaultAPI = axios.create({
  baseURL: 'http://localhost:8080/api'
})

const login = ({email, password}) => {
  return defaultAPI.post('/login', {
    email,
    password
  })
}

const setAuthHeaders = (token) => {
  defaultAPI.defaults.headers.common['Authorization'] = token
}

export default {login, setAuthHeaders}
