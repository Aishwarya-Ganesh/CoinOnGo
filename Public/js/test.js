const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD2vioD8VxyJb7KOTzFEDe8SQNbUoNPFlI",
  authDomain: "coinongo-6b06e.firebaseapp.com",
  projectId: "coinongo-6b06e",
});

var db = firebase.firestore();

db.collection("result").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});