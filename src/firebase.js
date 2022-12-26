// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi05AKKxLHtH0u0yiXNy8mtDLed24UyaA",
  authDomain: "hall-3-top-23.firebaseapp.com",
  projectId: "hall-3-top-23",
  storageBucket: "hall-3-top-23.appspot.com",
  messagingSenderId: "845504604056",
  appId: "1:845504604056:web:abc2773faf243c64e26ded",
  measurementId: "G-7VW5F9X1VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {
    firestore,
    analytics,
    auth
}