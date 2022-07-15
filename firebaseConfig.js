import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDiQfBAiM835ck_KbcHup_OAuulreVnlWI",
    authDomain: "nextjs-login-app-83bbc.firebaseapp.com",
    projectId: "nextjs-login-app-83bbc",
    storageBucket: "nextjs-login-app-83bbc.appspot.com",
    messagingSenderId: "814944411429",
    appId: "1:814944411429:web:737c2f0e5db9a67b4004cc",
    measurementId: "G-2JWG7BGRR3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()