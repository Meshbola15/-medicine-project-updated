import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG-mRrNpoFFa9lcdCIOCN_QiSfn_t-u-8",
  authDomain: "medical-pro-2.firebaseapp.com",
  projectId: "medical-pro-2",
  storageBucket: "medical-pro-2.appspot.com",
  messagingSenderId: "16851453964",
  appId: "1:16851453964:web:aec6af81b036e6e3ec4629",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
