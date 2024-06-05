import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBWhlFUjReG5Fm6k_0dFf_6LtMzdlohHa4",
  authDomain: "smart-fit-kitchen-f941b.firebaseapp.com",
  projectId: "smart-fit-kitchen-f941b",
  storageBucket: "smart-fit-kitchen-f941b.appspot.com",
  messagingSenderId: "980465855036",
  appId: "1:980465855036:web:42c6da33311e1123dd7139",
  measurementId: "G-2HRRL5BN99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;
