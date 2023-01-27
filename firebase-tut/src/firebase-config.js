import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAqK2JkApC0xfTbM8GurnDnAh2C2FsLpng",
  authDomain: "cloud-hosted-app-c08c4.firebaseapp.com",
  projectId: "cloud-hosted-app-c08c4",
  storageBucket: "cloud-hosted-app-c08c4.appspot.com",
  messagingSenderId: "793088568385",
  appId: "1:793088568385:web:0fa7c4ab30d36c75f36ac0",
  measurementId: "G-N02R7B8S6N",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
