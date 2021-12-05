import firebase from "firebase";
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "@firebase/firestore"


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcQTyebVikPIKxszue5dtY6CfJ_0yE6Uw",
  authDomain: "taskstodobyme.firebaseapp.com",
  projectId: "taskstodobyme",
  storageBucket: "taskstodobyme.appspot.com",
  messagingSenderId: "1056443706675",
  appId: "1:1056443706675:web:1fd9fb6b266e37a526e246",
  measurementId: "G-JYKWBJY0DV"
});

const db = firebaseApp.firestore();

export { db }