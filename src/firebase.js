import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "Your values here",
  authDomain: "Your values here",
  databaseURL: "Your values here",
  projectId: "Your values here",
  storageBucket: "Your values here",
  messagingSenderId: "Your values here",
  appId: "Your values here"
});

export {firebaseConfig as firebase};
