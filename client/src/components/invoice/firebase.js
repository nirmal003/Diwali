import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeyt8Fl_5X4-i1yKgRbzKOsJIJVudUj0g",
  authDomain: "awesome-crackers.firebaseapp.com",
  projectId: "awesome-crackers",
  storageBucket: "awesome-crackers.appspot.com",
  messagingSenderId: "185704730233",
  appId: "1:185704730233:web:9dc29ddf056a9aa2278ea8",
  measurementId: "G-M1DCFTCYPQ",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
