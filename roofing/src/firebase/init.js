// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTpYDYuL4-swX1ixBMLz5Ig0CEmkVdu5g",
  authDomain: "roofing-6495a.firebaseapp.com",
  projectId: "roofing-6495a",
  storageBucket: "roofing-6495a.appspot.com",
  messagingSenderId: "696861704001",
  appId: "1:696861704001:web:47b7a81029c8b0c701ebc0",
  measurementId: "G-617C3JY64Q"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// init firebase
const app = initializeApp(firebaseConfig)
const db = getStorage(app);

export default db