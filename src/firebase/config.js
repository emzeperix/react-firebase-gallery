import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvLL_Sn98efStdp8IYJhDP2ojvJAJVUbQ",
  authDomain: "fb-pg-c80ae.firebaseapp.com",
  databaseURL: "https://fb-pg-c80ae.firebaseio.com",
  projectId: "fb-pg-c80ae",
  storageBucket: "fb-pg-c80ae.appspot.com",
  messagingSenderId: "666388249147",
  appId: "1:666388249147:web:829d5c4a5df780e55e7a1e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize firestore and storage

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};
