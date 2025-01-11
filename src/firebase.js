import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4YkZIZqGhSt36OEwKNtODSrDMh2K5djw",
  authDomain: "portfolio-a65a6.firebaseapp.com",
  projectId: "portfolio-a65a6",
  storageBucket: "portfolio-a65a6.firebasestorage.app",
  messagingSenderId: "79421247837",
  appId: "1:79421247837:web:e3561a39f3ab284584d8b4",
  measurementId: "G-1C9NFMH4FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };