import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCvnXkOZK5lcvJ-s9S9rzexDDTwRkiK3nw",
    authDomain: "project-71-2be4d.firebaseapp.com",
    projectId: "project-71-2be4d",
    storageBucket: "project-71-2be4d.appspot.com",
    messagingSenderId: "783896112940",
    appId: "1:783896112940:web:43bd031bbc0d7d5b67c689"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();