// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCFIhVEkYPxyBiGyvzVq-HjbR3m3qZPgrk',
    authDomain: 'training-17f51.firebaseapp.com',
    projectId: 'training-17f51',
    storageBucket: 'training-17f51.appspot.com',
    messagingSenderId: '1032144273763',
    appId: '1:1032144273763:web:e14b1d6c3de318bee05356',
    measurementId: 'G-Q7ZNMGQWW9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
