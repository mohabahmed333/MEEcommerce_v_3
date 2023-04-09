import {auth}from'../firebase.utls';
import{createUserWithEmailAndPassword
}from'firebase/auth'
export const CreateUser =  async(email,password)=>{
    if(!email||!password) return;

    const user = await createUserWithEmailAndPassword(auth,email,password);

    return user;
 }