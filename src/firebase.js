import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxXU8NSpdSWPyKEKY0TJoY6DGKyfuojgo",
  authDomain: "todo-app-4bead.firebaseapp.com",
  projectId: "todo-app-4bead",
  storageBucket: "todo-app-4bead.appspot.com",
  messagingSenderId: "829877192018",
  appId: "1:829877192018:web:a2e3db63dc82dc4687668b"
})

const db = firebaseApp.firestore()

export default db