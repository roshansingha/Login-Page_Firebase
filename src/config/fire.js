import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCvnnsj-w6ULRRmXaPgXiF5waeCPZDbS-w",
    authDomain: "react-login-3c9da.firebaseapp.com",
    databaseURL: "https://react-login-3c9da.firebaseio.com",
    projectId: "react-login-3c9da",
    storageBucket: "react-login-3c9da.appspot.com",
    messagingSenderId: "382778572431",
    appId: "1:382778572431:web:752b6f69db20776bdefafa",
    measurementId: "G-RFCNV97ZKW"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;