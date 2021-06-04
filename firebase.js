import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlFi-1yu_CMWFU_Wfj4NJY-UALLXzf98U",
  authDomain: "signal-clone-39b8b.firebaseapp.com",
  projectId: "signal-clone-39b8b",
  storageBucket: "signal-clone-39b8b.appspot.com",
  messagingSenderId: "728290467644",
  appId: "1:728290467644:web:54db4932dabcf3a46e4839",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };