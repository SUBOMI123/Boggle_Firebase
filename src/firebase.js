// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGXcY9LqqgPCPGThpvmbo_NgGUTqeN0OA",
  authDomain: "boggle-solver-a6578.firebaseapp.com",
  projectId: "boggle-solver-a6578",
  storageBucket: "boggle-solver-a6578.appspot.com",
  messagingSenderId: "407727370238",
  appId: "1:407727370238:web:8623bed49f3107467e5aaf",
  measurementId: "G-SEREZ2CJ8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);