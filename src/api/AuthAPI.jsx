import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'

let auth = getAuth
export const LoginAPI = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
};
