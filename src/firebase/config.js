// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALYj_ngQFpmq9On7iIp4GgSAvxNhlecDM",
  authDomain: "stride-gear.firebaseapp.com",
  projectId: "stride-gear",
  storageBucket: "stride-gear.firebasestorage.app",
  messagingSenderId: "385287862426",
  appId: "1:385287862426:web:170d39812b98209df3c723"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();