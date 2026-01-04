// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDataConnect, connectDataConnectEmulator } from "firebase/data-connect";
import { connectorConfig } from "@dataconnect/generated";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = 
{
  apiKey: "AIzaSyAMLPEwsD6sFZ1-p_mJj9riN6XsH3hVU60",
  authDomain: "mustafa-reactapp.firebaseapp.com",
  projectId: "mustafa-reactapp",
  storageBucket: "mustafa-reactapp.firebasestorage.app",
  messagingSenderId: "895670990988",
  appId: "1:895670990988:web:7597f7c7bdf1399b6c23a9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

// Initialize Firebase services
export const auth = getAuth(app);
console.log('Firebase auth initialized:', auth);

export const db = getFirestore(app);
console.log('Firebase db initialized:', db);

// Initialize Data Connect
const dataConnect = getDataConnect(connectorConfig);

// Connect to emulator in development
if (process.env.NODE_ENV === 'development') {
  connectDataConnectEmulator(dataConnect, 'localhost', 9399);
}

export { dataConnect };