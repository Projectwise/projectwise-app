import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA8QNir-0rtD6cQ0WplPwghK0xPoECxy3o',
  authDomain: 'projectwise-7492a.firebaseapp.com',
  databaseURL: 'https://projectwise-7492a.firebaseio.com',
  projectId: 'projectwise-7492a',
  storageBucket: 'projectwise-7492a.appspot.com',
  messagingSenderId: '34685123551'
}

const fire = firebase.initializeApp(config)

export default fire
