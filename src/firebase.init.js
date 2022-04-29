import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: 'AIzaSyD8i0kykktF7IxNduMPQT6a1vLk2r-i9zc',
    authDomain: 'iham-bike-bazar.firebaseapp.com',
    projectId: 'iham-bike-bazar',
    storageBucket: 'iham-bike-bazar.appspot.com',
    messagingSenderId: '803807597114',
    appId: '1:803807597114:web:3cfa9d484b54abab5c9b03',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;