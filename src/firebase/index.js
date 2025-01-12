// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsLS-D_D5NCLi3EBc6PD343C19yFjrQuk",
  authDomain: "twitter-a8222.firebaseapp.com",
  projectId: "twitter-a8222",
  storageBucket: "twitter-a8222.firebasestorage.app",
  messagingSenderId: "161100359763",
  appId: "1:161100359763:web:9c84b7f32b70c3656c7ea6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);
