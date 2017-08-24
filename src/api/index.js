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

const fetchUser = () => {
  return defaultAPI.get('/profile')
}

const addProject = (project) => {
  return defaultAPI.post('/projects', project)
}

const fetchAllProjects = () => {
  return defaultAPI.get('/projects')
}

const fetchProject = (projectId) => {
  return defaultAPI.get(`/projects/${projectId}`)
}

const setAuthHeaders = (token) => {
  defaultAPI.defaults.headers.common['Authorization'] = token
}

export default {
  signup,
  login,
  addProject,
  fetchUser,
  fetchAllProjects,
  fetchProject,
  setAuthHeaders
}
