import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// const config = {
//     apiKey: "AIzaSyAJ67oi94nEMmlfGFWllVRB0Q8rdmH3yUg",
//     authDomain: "happykids-schedule.firebaseapp.com",
//     databaseURL: "https://happykids-schedule.firebaseio.com",
//     projectId: "happykids-schedule",
//     storageBucket: "happykids-schedule.appspot.com",
//     messagingSenderId: "74310977451"
//   };
//   firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
