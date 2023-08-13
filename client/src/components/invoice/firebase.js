// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrpLKnCXAisBrbHqQMin2smFN15jiAZkI",
  authDomain: "main-project-cebfd.firebaseapp.com",
  projectId: "main-project-cebfd",
  storageBucket: "main-project-cebfd.appspot.com",
  messagingSenderId: "778621182331",
  appId: "1:778621182331:web:efcf4b0144e1956a48ddde",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
