import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIFXL3fJVrP6Zq1IDcssCWP-4nC9HPmuw",
  authDomain: "tedx-website-9333d.firebaseapp.com",
  projectId: "tedx-website-9333d",
  storageBucket: "tedx-website-9333d.appspot.com",
  messagingSenderId: "333099806825",
  appId: "1:333099806825:web:bcd59084781b45b36f72f8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
