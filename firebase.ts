import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4JWnVWttEx5nxvVpIl64ViM4tIkVNQKw",
  authDomain: "chat-gpt-9da4d.firebaseapp.com",
  projectId: "chat-gpt-9da4d",
  storageBucket: "chat-gpt-9da4d.appspot.com",
  messagingSenderId: "299191280535",
  appId: "1:299191280535:web:e03590318a14989dc01ad2"
};

// Initialize Firebase
const app = getApps.length?getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}