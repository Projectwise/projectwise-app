import API from '../api'

import { PROJECT } from '../config/constants'

const requestProjectSave = (project) => {
  return {
    type: PROJECT.SAVE,
    project
  }
}

const projectSaved = (project) => {
  return {
    type: PROJECT.SAVE_SUCCESS,
    project
  }
}

const projectSaveError = (message) => {
  return {
    type: PROJECT.SAVE_ERROR,
    message
  }
}

export const saveProject = (project) => {
  return (dispatch) => {
    dispatch(requestProjectSave(project))

    return API.addProject(project)
      .then((response) => {
        if(response.statusText !== 'OK') {
          dispatch(projectSaveError(response.data))
          return Promise.reject(response)
        } else {
          dispatch(projectSaved(response.data))
        }
      })
  }
}
