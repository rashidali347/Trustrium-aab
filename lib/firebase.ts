// lib/firebase.ts
// Fix: Use Firebase v9 modular syntax to resolve module export issues.
import { initializeApp } from "firebase/app";
// FIX: Use named imports for Firebase Auth functions as per v9 modular SDK.
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZkZ4XhpzzYhuhEBbo12vmWCmt0DUlEYA",
  authDomain: "trustora2.firebaseapp.com",
  projectId: "trustora2",
  storageBucket: "trustora2.firebasestorage.app",
  messagingSenderId: "366451977115",
  appId: "1:366451977115:web:f3c3991765b5afdf03cf3e",
  measurementId: "G-8F2JS0W17J"
};

// FIX: Initialize Firebase using the v9 modular syntax.
const app = initializeApp(firebaseConfig);

// Export Firebase modular services.
// FIX: Export Firebase services using the v9 modular syntax.
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;