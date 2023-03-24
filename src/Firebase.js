// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK0W80obKmn0sBqbNFEGwIty9xqmwvwxk",
  authDomain: "book-app-43a1b.firebaseapp.com",
  databaseURL: "https://book-app-43a1b-default-rtdb.firebaseio.com",
  projectId: "book-app-43a1b",
  storageBucket: "book-app-43a1b.appspot.com",
  messagingSenderId: "30378196298",
  appId: "1:30378196298:web:6256ca0af0e45106ddd5b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);