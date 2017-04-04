import axios from 'axios'

const defaultAPI = axios.create({
  baseURL: 'http://localhost:8080/api'
})

const signup = (userDetails) => {
  return defaultAPI.post('/signup', userDetails)
}

const login = ({email, password}) => {
  return defaultAPI.post('/login', {
    email,
    password
  })
}

const addProject = (project) => {
  return defaultAPI.post('/projects', project)
}

const setAuthHeaders = (token) => {
  defaultAPI.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default {signup, login, addProject, setAuthHeaders}
