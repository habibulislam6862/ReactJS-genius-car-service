import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const firebaseInit = () => initializeApp(firebaseConfig);

export default firebaseInit;