import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyCoH8oMEyKQ74xgoRT89R8H4ZyLXW_kVus",
  authDomain: "project-73-c2071.firebaseapp.com",
  projectId: "project-73-c2071",
  storageBucket: "project-73-c2071.appspot.com",
  messagingSenderId: "456606048169",
  appId: "1:456606048169:web:7ffe3067b3a08a22fdaeb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();