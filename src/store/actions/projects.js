import {
  GET_PROJECTS,
  GET_PROJECT,
  LIKE_PROJECT,
  DISLIKE_PROJECT
} from '../constants'
import API from '../../api'

export const getProjects = () => {
  return {
    type: GET_PROJECTS,
    promise: API.getProjects()
  }
}

export const getProject = (projectId) => {
  return {
    type: GET_PROJECT,
    promise: API.getProject(projectId)
  }
}

export const likeProject = (projectId) => {
  return {
    type: LIKE_PROJECT,
    promise: API.likeProject(projectId)
  }
}

export const dislikeProject = (projectId) => {
  return {
    type: DISLIKE_PROJECT,
    promise: API.dislikeProject(projectId)
  }
}
