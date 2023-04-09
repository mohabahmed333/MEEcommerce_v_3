import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase.utls';


 const signIn = async(email,password)=>{
    if(!email,!password)return;
    
   return await  signInWithEmailAndPassword(auth,email,password);
}
export default signIn