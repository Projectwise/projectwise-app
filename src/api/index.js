import axios from 'axios'
import qs from 'qs'

const PUBLIC_URI = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL
  : 'http://localhost:8080'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: `${PUBLIC_URI}/api`
    })
    this.githubAuthUrl = `https://github.com/login/oauth/authorize?${qs.stringify({
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      redirect_uri: window.location.origin + '/auth/github/callback',
      scope: 'user'
    })}`
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
  githubToken (code) {
    return this.axios.get(`/auth/token/github?code=${code}`)
  }
  githubAuthenticate (accessToken) {
    return this.axios.get(`/auth/github?access_token=${accessToken}`)
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
