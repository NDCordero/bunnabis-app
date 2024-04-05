import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-MtvAru44BylQ7mGXDBzlc50E-zSjGuM",
  authDomain: "bunnabis-94590.firebaseapp.com",
  projectId: "bunnabis-94590",
  storageBucket: "bunnabis-94590.appspot.com",
  messagingSenderId: "630027548462",
  appId: "1:630027548462:web:354d00c85b3d7c5dc1ecbf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)