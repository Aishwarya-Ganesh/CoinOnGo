// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2vioD8VxyJb7KOTzFEDe8SQNbUoNPFlI",
  authDomain: "coinongo-6b06e.firebaseapp.com",
  databaseURL: "https://coinongo-6b06e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coinongo-6b06e",
  storageBucket: "coinongo-6b06e.appspot.com",
  messagingSenderId: "782287423141",
  appId: "1:782287423141:web:c47321b041969d9c0bef4c",
  measurementId: "G-M0MF3RB55Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

const querySnapshot = await getDocs(collection(db, "result"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
function printout() {
  console.log("test, and etstA")

}

init();
printout();