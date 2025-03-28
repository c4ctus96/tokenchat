import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBRDBbrJbmLwb3YTI_YBmMdTjLEd8KjS2E",
  authDomain: "tokenchat-b8673.firebaseapp.com",
  projectId: "tokenchat-b8673",  // Firestore doesn't need databaseURL
  storageBucket: "tokenchat-b8673.appspot.com",
  messagingSenderId: "593980787293",
  appId: "1:593980787293:web:7c58ff7656a3fa31b19bb4",
  measurementId: "G-RB9WJLVQC0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);  // Initialize Firestore

export { firebaseConfig, firestore };
