import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhWxeesRC8CVrzZGySe3HXweqo169Ulsk",
  authDomain: "medical-801fe.firebaseapp.com",
  projectId: "medical-801fe",
  storageBucket: "medical-801fe.appspot.com",
  messagingSenderId: "840315288645",
  appId: "1:840315288645:web:fcfbeb7278e970f57f372c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
