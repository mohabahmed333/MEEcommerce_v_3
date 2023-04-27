import{ 
    doc,
    getDoc,
    setDoc
}from 'firebase/firestore';
import{
    db
}
 from'../firebase.utls'
export  const GetUserFromDocs = async (user,otherProps={})=>{
     //doc take db , collection, user id it will look for 'db/users?=userid';
    //in return it will return the references of the doc to use it to get the doc
    const userDocRef = await doc(db,'users',user.uid);
     //accessing got file
    const gettingUserDocSnapSot  = await getDoc(userDocRef);

    // check if whether user exist or not  in database and accessing the user data 
    // console.log(gettingUserDoc.exist())
//if user doesnot exist create new doc to him/er
if(!gettingUserDocSnapSot.exists()){
    const {displayName,email} = user;
     const createdAt = new Date();
    try{
        //setting up user Data 
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            imageUrl:'',
            ...otherProps,
            orders:[],
            wishlist:[],
            paymentMethods:[]
        })


    }

    catch(err){

    }

}

return gettingUserDocSnapSot;

}