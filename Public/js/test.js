const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();


const snapshot = await db.collection('result').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});