// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCGTRYuUnnb8y7LjnxElunNmkOb3h1d1Q8',
    authDomain: 'hotelphutho-alta.firebaseapp.com',
    projectId: 'hotelphutho-alta',
    storageBucket: 'hotelphutho-alta.appspot.com',
    messagingSenderId: '1024210103267',
    appId: '1:1024210103267:web:8e353191ae8a1cbff04ed6',
    measurementId: 'G-GMWNSMHJH0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
