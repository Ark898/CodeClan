// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvUAKKLuIVYdA_BiwRYO82gHWsPjeZ1F4",
  authDomain: "codeclan-e29ec.firebaseapp.com",
  projectId: "codeclan-e29ec",
  storageBucket: "codeclan-e29ec.appspot.com",
  messagingSenderId: "164107033685",
  appId: "1:164107033685:web:55e2fb9ad6ec2b8f4948dc"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };