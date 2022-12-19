// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNUjfXq0KFXhuSsS4sjc22OW81zKR2e6o",
  authDomain: "realtore-clone-react.firebaseapp.com",
  projectId: "realtore-clone-react",
  storageBucket: "realtore-clone-react.appspot.com",
  messagingSenderId: "784876099813",
  appId: "1:784876099813:web:a97edabba7bc5738799c0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();