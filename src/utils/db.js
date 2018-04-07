const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCpdc2xSQo0b8xa3qhMUmM8m5Athgto5Lg",
  authDomain: "firecms-1.firebaseapp.com",
  databaseURL: "https://firecms-1.firebaseio.com",
  projectId: "firecms-1",
  storageBucket: "firecms-1.appspot.com",
  messagingSenderId: "61611348345"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

export { db };