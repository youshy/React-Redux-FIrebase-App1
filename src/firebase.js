import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAJc8PU51OwyyGAs6gufHQmD_MpRVEi-LE",
  authDomain: "react-redux-firebase-app1.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app1.firebaseio.com",
  projectId: "react-redux-firebase-app1",
  storageBucket: "react-redux-firebase-app1.appspot.com",
  messagingSenderId: "368881940746"
};
firebase.initializeApp(config);

export default firebase;
