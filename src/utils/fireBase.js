// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8DLo48Ecz7I2MAIqYcSs5YwgxgyUQD-I",
  authDomain: "imdb-clone-146b5.firebaseapp.com",
  projectId: "imdb-clone-146b5",
  storageBucket: "imdb-clone-146b5.appspot.com",
  messagingSenderId: "1014973592922",
  appId: "1:1014973592922:web:048ef7a08765f08ed3ef63",
  measurementId: "G-B4FM8M6T9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
