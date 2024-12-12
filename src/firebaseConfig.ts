import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCGTRYuUnnb8y7LjnxElunNmkOb3h1d1Q8',
    authDomain: 'hotelphutho-alta.firebaseapp.com',
    projectId: 'hotelphutho-alta',
    storageBucket: 'hotelphutho-alta.appspot.com',
    messagingSenderId: '1024210103267',
    appId: '1:1024210103267:web:e2b19c59316d0abdf04ed6',
    measurementId: 'G-FRMFDP1J49'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
