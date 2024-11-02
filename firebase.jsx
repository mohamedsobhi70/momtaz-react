
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.MOMTAZ_FIREBASE_API_KEY,
    authDomain: process.env.MOMTAZ_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.MOMTAZ_FIREBASE_PROJECT_ID,
    storageBucket: process.env.MOMTAZ_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MOMTAZ_FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.MOMTAZ_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;