
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhDljcjwH9v-ht-aVMTbLZG93eRt3OxN4",
  authDomain: "rdpmessaging.firebaseapp.com",
  projectId: "rdpmessaging",
  storageBucket: "rdpmessaging.appspot.com",
  messagingSenderId: "319158193722",
  appId: "1:319158193722:web:ac53f33c76228000a72f03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();