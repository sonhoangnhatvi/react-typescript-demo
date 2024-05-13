import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfJz4UjTDSIHkPQMNAYdfa57aDNJZdr5o",
  authDomain: "curd-10cef.firebaseapp.com",
  projectId: "curd-10cef",
  storageBucket: "curd-10cef.appspot.com",
  messagingSenderId: "1039995209324",
  appId: "1:1039995209324:web:a68a2fe66e6608ad5afa49",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app);
