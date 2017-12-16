import axios from 'axios'

const PUBLIC_URI = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL
  : 'http://localhost:8080'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: `${PUBLIC_URI}/api`
    })
  }
  setAuthHeader (token) {
    this.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }
  removeAuthHeader () {
    delete this.axios.defaults.headers.common['Authorization']
  }
  signup (userDetails) {
    return this.axios.post('/signup', userDetails)
  }
  login (userDetails) {
    return this.axios.post('/login', userDetails)
  }
  getProjects (query) {
    return this.axios.get('/projects', query)
  }
  getProject (projectId) {
    return this.axios.get(`/projects/${projectId}`)
  }
  likeProject (projectId) {
    return this.axios.post(`/projects/${projectId}/like`)
  }
  dislikeProject (projectId) {
    return this.axios.delete(`/projects/${projectId}/like`)
  }
  addProject (projectDetails) {
    return this.axios.post('/projects', projectDetails)
  }
  getCategories () {
    return this.axios.get('/categories')
  }
}

export default new API()
