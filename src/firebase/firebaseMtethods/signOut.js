import{signOut} from 'firebase/auth'
import { auth } from '../firebase.utls'


export const signUserOut= async ()=>{
   return await signOut(auth)
} 