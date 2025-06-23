// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-DTKVpO01Zvb7jxpDxvisU7mjiRgq-Tk",
  authDomain: "garritas-accesorios.firebaseapp.com",
  projectId: "garritas-accesorios",
  storageBucket: "garritas-accesorios.firebasestorage.app",
  messagingSenderId: "469004857647",
  appId: "1:469004857647:web:3abcb857729339118c31da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)