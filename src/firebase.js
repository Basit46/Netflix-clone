import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZwYyVJ_W30ModO7FPOduJ9V8dZXYvbPE",
  authDomain: "netflix-clone-f467e.firebaseapp.com",
  projectId: "netflix-clone-f467e",
  storageBucket: "netflix-clone-f467e.appspot.com",
  messagingSenderId: "395357470673",
  appId: "1:395357470673:web:913a88faeaa811e3336af0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
