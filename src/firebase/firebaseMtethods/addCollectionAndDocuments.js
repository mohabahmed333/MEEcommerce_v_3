import {db} from '../firebase.utls';
import { collection,doc,getDocs,query,writeBatch } from 'firebase/firestore';

export  const AddCollectionAndDocument = async (collectionKey,objectToAdd)=>{
//getting the collection  refferances from firebase;
const collectionRef = collection(db,collectionKey);
//setup batch method 
const batch =  writeBatch(db);
//////get object and loop on it 
objectToAdd.forEach(obj=>{
    //get docRef by passing the collectionRef and The name of the document you wanna add
    const docRef = doc(collectionRef,obj.title.toLowerCase());
    //set batch by getting docRef and pushing All the collection objects
    batch.set(docRef,obj)
});
await batch.commit();

}
 

export const GETCollection = async ()=>{
try{
  const  collrectionRef  = collection(db,'categories');
  const q =  query(collrectionRef);
  const querySnapshot= await getDocs(q);
  return querySnapshot.docs.map(docSnapShot=> docSnapShot.data())
//  const catougries = querySnapshot.docs.reduce((acc,docSnapshot)=>{
//    const {title,items}=docSnapshot.data()
//    acc[title.toLowerCase()] = items;
//    return acc
//  },{});
//  return catougries
}
 catch(err){
 }
}