import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLD1Yhbv7adB5P6RAQ7xot_4RQNPAeWc0",
    authDomain: "instagram-clone-react-8136e.firebaseapp.com",
    projectId: "instagram-clone-react-8136e",
    storageBucket: "instagram-clone-react-8136e.appspot.com",
    messagingSenderId: "256942090053",
    appId: "1:256942090053:web:a8d08a34393088b6fc802c",
    measurementId: "G-2ZHQFLRWMH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };