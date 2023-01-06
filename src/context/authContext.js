import React, { useState, createContext, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);

    setDoc(doc(db, "users", email), {
      savedMovies: [],
    });
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cred) => {
      setUser(cred?.email);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <authContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
