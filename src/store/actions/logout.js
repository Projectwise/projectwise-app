import { LOGOUT } from '../constants'
import firebase from '../../firebase'

const logout = () => {
  firebase.auth().signOut()
  return {
    type: LOGOUT
  }
}

export default logout
