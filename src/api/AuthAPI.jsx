import {signInWithEmailAndPassword,} from 'firebase/auth'
import {auth}from "../firebaseConfig.js"


export const LoginAPI = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
};
