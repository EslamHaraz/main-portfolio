import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/auth";
import "firebase/compat/firestore";
// ... other firebase imports
const firebaseConfig = {
    apiKey: "AIzaSyBpl4jKIbZxq6Ng9DBDvCp6xEFTAORicSY",
    authDomain: "hospital-site-f6c8a.firebaseapp.com",
    projectId: "hospital-site-f6c8a",
    storageBucket: "hospital-site-f6c8a.appspot.com",
    messagingSenderId: "352982365791",
    appId: "1:352982365791:web:9f9bc1d2612dd1517ccdea",
    measurementId: "G-TQ6EGQTQJD",
};
// used for the firestore refs
export const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage(app);
export const db = firebase.firestore(app);
export default { db, storage, app };
