import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyBYWgclWTjgzkl1vIlKAIGpLrPOcQxiTQs",
  authDomain: "testi-ed4c4.firebaseapp.com",
  projectId: "testi-ed4c4",
  storageBucket: "testi-ed4c4.appspot.com",
  messagingSenderId: "234224763481",
  appId: "1:234224763481:web:6b465cd66cc4f316446748"
};

const app = initializeApp(firebaseConfig);
//initializeApp(firebaseConfig)

const firestore = getFirestore()
const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES
}

console.log("Toimii yhteys")