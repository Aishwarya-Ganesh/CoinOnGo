import {initializeApp} from 'firebase-admin/app';
import { initializeFirestroe, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';

const firebaseAPP = initializeApp ({
    apiKey: "AIzaSyD2vioD8VxyJb7KOTzFEDe8SQNbUoNPFlI",
    authDomain: "coinongo-6b06e.firebaseapp.com",
    databaseURL: "https://coinongo-6b06e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coinongo-6b06e",
    storageBucket: "coinongo-6b06e.appspot.com",
    messagingSenderId: "782287423141",
    appId: "1:782287423141:web:c47321b041969d9c0bef4c",
    measurementId: "G-M0MF3RB55Q"
  });




const db = getFirestore();


const snapshot = await db.collection('Wallet_DB').get();

console.log(snapshot);

//snapshot.forEach((doc) => {
//  console.log(doc.id, '=>', doc.data());
//});
