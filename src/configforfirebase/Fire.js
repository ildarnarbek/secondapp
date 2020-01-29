import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCxXQlswWLKcFk5k3z1APQnYbxeGUAYoLU",
  authDomain: "secondapp-f7869.firebaseapp.com",
  databaseURL: "https://secondapp-f7869.firebaseio.com",
  projectId: "secondapp-f7869",
  storageBucket: "secondapp-f7869.appspot.com",
  messagingSenderId: "662601975297",
  appId: "1:662601975297:web:45c6b7864a8f6c765be200"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
