import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD53yi_sVj59pUhwULaAVxrpgQy1ePc9XY",
    authDomain: "drive-28ae7.firebaseapp.com",
    projectId: "drive-28ae7",
    storageBucket: "drive-28ae7.appspot.com",
    messagingSenderId: "799691443995",
    appId: "1:799691443995:web:11b0987bbc8fdacdf48dbe"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }