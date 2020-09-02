import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyD7F6odmJRKoDWxwbnAEIym0mOQS3H4bec",
    authDomain: "passwords-2df7d.firebaseapp.com",
    databaseURL: "https://passwords-2df7d.firebaseio.com",
    projectId: "passwords-2df7d",
    storageBucket: "passwords-2df7d.appspot.com",
    messagingSenderId: "595439869698",
    appId: "1:595439869698:web:ce1178025f0a796458ac1b"
  };
 
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  export {
      db, 
      firebase
  }

  