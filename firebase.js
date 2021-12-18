// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT4z8lTnAXsUuZ664IHkLnV8RqvZV6Qaw",
  authDomain: "insta-clone-6faab.firebaseapp.com",
  projectId: "insta-clone-6faab",
  storageBucket: "insta-clone-6faab.appspot.com",
  messagingSenderId: "913501712804",
  appId: "1:913501712804:web:0ff639e258a783d439d131"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };