import * as firebase from 'firebase'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyAJ67oi94nEMmlfGFWllVRB0Q8rdmH3yUg",
    authDomain: "happykids-schedule.firebaseapp.com",
    databaseURL: "https://happykids-schedule.firebaseio.com",
    projectId: "happykids-schedule",
    storageBucket: "happykids-schedule.appspot.com",
    messagingSenderId: "74310977451"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}
