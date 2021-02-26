import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUl2EHdyKNBqBKFBrzZUCnzBukZCX4wLU",
    authDomain: "fir-94c9e.firebaseapp.com",
    databaseURL: "https://fir-94c9e-default-rtdb.firebaseio.com",
    projectId: "fir-94c9e",
    storageBucket: "fir-94c9e.appspot.com",
    messagingSenderId: "971715954923",
    appId: "1:971715954923:web:d891fc3cf8fd0978d5d6ae"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};