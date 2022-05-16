import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: 'plant-55f62.firebaseapp.com',
    projectId: 'plant-55f62',
    storageBucket: 'plant-55f62.appspot.com',
    messagingSenderId: '591006019430',
    appId: '1:591006019430:web:1657f5670eb83bc1b7e2a7',
    measurementId: 'G-0FWD5PPC78',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
