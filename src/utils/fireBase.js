// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCma_pFfRAgfjdHNuM9656teurkt4lqpuQ",
  authDomain: "zapas-haedo.firebaseapp.com",
  projectId: "zapas-haedo",
  storageBucket: "zapas-haedo.appspot.com",
  messagingSenderId: "1001216185205",
  appId: "1:1001216185205:web:f0da9027df20ab7286393c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
