const app = require("firebase-admin/app");
const firestore = require("firebase-admin/firestore");
const data = require("../config/config.json");

const config = data.firebase.development;

// const config = data.isProduction
//   ? data.firebase.production
//   : data.firebase.devlopment;
  
app.initializeApp({
  credential: app.cert(config),
});

const db = firestore.getFirestore();

setup.db = db; 
module.exports = { db };
