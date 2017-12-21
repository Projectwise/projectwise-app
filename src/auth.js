import firebase from './firebase'
import login from './store/actions/login'
import logout from './store/actions/logout'

const auth = (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log('onauth state changed called')
    if (user) {
      // // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // // ...

      dispatch(login(user))
    } else {
      // User is signed out.
      // ...
      dispatch(logout())
    }
  })
}

export default auth
