import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"
 import { db } from "../firebase.utls"


export const addUserDataBase=async(data={},user)=>{
     //get doc referrancess

      const {id ,...otherData}  = user;
     const regf =  doc(db,'users',id);
    await setDoc(regf, {
        ...otherData,
        ...data
    });
  }