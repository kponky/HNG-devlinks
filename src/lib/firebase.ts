// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAceVe0ewdK0GqGu9a-ph-VYXwlmnbrenA",
  authDomain: "link-sharing-app-50790.firebaseapp.com",
  projectId: "link-sharing-app-50790",
  storageBucket: "link-sharing-app-50790.appspot.com",
  messagingSenderId: "466676302010",
  appId: "1:466676302010:web:b0dd28b322b6912cbc8283",
  measurementId: "G-1T02BMPP6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export  const auth = getAuth (app);
export const  db = getFirestore(app)

