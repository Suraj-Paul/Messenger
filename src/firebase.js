import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9GG2i4L29DGEQikAEU0DYXwGMwWAc9Xo",
    authDomain: "messenger-clone-27fb9.firebaseapp.com",
    databaseURL: "https://messenger-clone-27fb9-default-rtdb.firebaseio.com",
    projectId: "messenger-clone-27fb9",
    storageBucket: "messenger-clone-27fb9.appspot.com",
    messagingSenderId: "578782030465",
    appId: "1:578782030465:web:6ff09125600cf3b49a3b80",
    measurementId: "G-WH5DRE6CRM"
});

const db = firebaseApp.firestore();
export default db;