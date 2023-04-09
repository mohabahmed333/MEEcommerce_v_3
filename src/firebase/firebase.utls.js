import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { 
    getAuth,
    onAuthStateChanged
    } from "firebase/auth";
import{ 
    getFirestore,
}from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCr9HYQfixijjhd6v0TolQcPoWFxouvj0g",
    authDomain: "ecommdb-8e602.firebaseapp.com",
    projectId: "ecommdb-8e602",
    storageBucket: "ecommdb-8e602.appspot.com",
    messagingSenderId: "959301006037",
    appId: "1:959301006037:web:919e125a231c7233d4285c",
    measurementId: "G-24SEVC8BQV"
};
firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const firestore = firebase.firestore();
export const GetUserAuthStateReducer =  (callback)=>onAuthStateChanged(auth,callback);
 
export const OnAuthChangesAsync = ()=>{
    return new Promise((resolve,reject)=>{
        const unSubscribtion = onAuthStateChanged(auth,()=>{
            unSubscribtion();
            resolve(auth)
        },reject
        )
    })
}

export default firebase;

