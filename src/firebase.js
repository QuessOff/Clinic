import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4nAigr5FG9dTO5OZbPr8JVTul4PoAlKs",
  authDomain: "chat4-5afb3.firebaseapp.com",
  databaseURL: "https://chat4-5afb3-default-rtdb.firebaseio.com",
  projectId: "chat4-5afb3",
  storageBucket: "chat4-5afb3.appspot.com",
  messagingSenderId: "538446503571",
  appId: "1:538446503571:web:7065dd5bc365fda60cf766"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
