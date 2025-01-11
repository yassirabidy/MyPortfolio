import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4YkZIZqGhSt36OEwKNtODSrDMh2K5djw",
    authDomain: "portfolio-a65a6.firebaseapp.com",
    projectId: "portfolio-a65a6",
    storageBucket: "portfolio-a65a6.firebasestorage.app",
    messagingSenderId: "79421247837",
    appId: "1:79421247837:web:e3561a39f3ab284584d8b4",
    measurementId: "G-1C9NFMH4FB"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };