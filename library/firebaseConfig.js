// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMvaebuwfpWHVy42mQV3Q8LoX-GZwvabg",
  authDomain: "notes-app-reactnative.firebaseapp.com",
  databaseURL: "https://notes-app-reactnative-default-rtdb.firebaseio.com",
  projectId: "notes-app-reactnative",
  storageBucket: "notes-app-reactnative.appspot.com",
  messagingSenderId: "909641254501",
  appId: "1:909641254501:web:73b831c1d7f87cbc63e88c",
  measurementId: "G-XLJWFBEXTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);