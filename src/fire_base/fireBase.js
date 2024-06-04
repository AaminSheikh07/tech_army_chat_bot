import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf3ed1rUNv3kJ0f4Joc04YNzJkDWS1jrc",
  authDomain: "chatbot-86240.firebaseapp.com",
  projectId: "chatbot-86240",
  storageBucket: "chatbot-86240.appspot.com",
  messagingSenderId: "764525509522",
  appId: "1:764525509522:web:18075b84b103ae680b9f4b",
  measurementId: "G-YW4RZBDS4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const db = getFirestore(app);
export { app, auth };
