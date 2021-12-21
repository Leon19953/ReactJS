import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrKUNEqgf_1OxmPnYYlSL0CZmJ0V31a5I",
  authDomain: "react-app-dd69c.firebaseapp.com",
  projectId: "react-app-dd69c",
  storageBucket: "react-app-dd69c.appspot.com",
  messagingSenderId: "794138930039",
  appId: "1:794138930039:web:c2afe51941e7ac1c774f72",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
