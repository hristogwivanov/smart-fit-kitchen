import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWhlFUjReG5Fm6k_0dFf_6LtMzdlohHa4",
  authDomain: "smart-fit-kitchen-f941b.firebaseapp.com",
  projectId: "smart-fit-kitchen-f941b",
  storageBucket: "smart-fit-kitchen-f941b.appspot.com",
  messagingSenderId: "980465855036",
  appId: "1:980465855036:web:42c6da33311e1123dd7139",
  measurementId: "G-2HRRL5BN99"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;