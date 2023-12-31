import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRrxVfV7r43EXGYlaN7v0dMsCVh6S7A4Q",
  authDomain: "react-markdown-notes-ade08.firebaseapp.com",
  projectId: "react-markdown-notes-ade08",
  storageBucket: "react-markdown-notes-ade08.appspot.com",
  messagingSenderId: "1043574738047",
  appId: "1:1043574738047:web:6744d82b90028b8c85c34a",
  measurementId: "G-7K0M6YVZHK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');