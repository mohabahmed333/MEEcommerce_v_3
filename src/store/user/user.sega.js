import{all,call,put,takeLatest } from 'redux-saga/effects'
import { OnAuthChangesAsync } from '../../firebase/firebase.utls'
import{USERTYPES} from './user.types';
import{SIGN_IN_SUCCESS,SIGN_IN_FAIID, SIGNUSEROUT, UploadUserImageSuccess, UploadUserDataSuccess} from './user.actions'
import{GetUserFromDocs} from '../../firebase/firebaseMtethods/connectuserToDocs';
import { signInWithGoogle } from '../../firebase/firebaseMtethods/AddUserWithAuthProviders';
import { signUserOut } from '../../firebase/firebaseMtethods/signOut';
 import signIn from '../../firebase/firebaseMtethods/signInWithEmailAndPassword';
import { CreateUser } from '../../firebase/firebaseMtethods/signUpWithEmail&password';
import { adduserImageToStorage } from '../../firebase/firebaseMtethods/adduserImageToStorage';
import { addUserDataBase } from '../../firebase/firebaseMtethods/adduserData';
import { HandleReducerFunction } from '../cart/cart.reducer';
 //signing user and connect him||her to docs

function* GetUserSnapShotData (userAuth, additionalDetails ){
         try{
                const snapShot = yield call(GetUserFromDocs,userAuth, additionalDetails );
                const {id} =snapShot;
                     yield put( SIGN_IN_SUCCESS({id,...snapShot.data()}))
                     const {cart} =snapShot.data() 
                     console.log(cart
                            )
                            //once user sign in 
        if(snapShot)return  yield put(HandleReducerFunction(cart));

             }
         catch(err){
 
                yield put(SIGN_IN_FAIID(err))

         }  
}
//checkUserSession 
function* CheckuserSession(){
    try{
 
            const {currentUser} = yield call(OnAuthChangesAsync);
             if(!currentUser) return;
             yield call(GetUserSnapShotData,currentUser);
        console.log(currentUser)

    }
    catch(error){
        console.log(error)
            yield put(SIGN_IN_FAIID(error))
    }
}
//checkUserSession Pointer
 function* onCheckUserSession(){
   yield takeLatest(USERTYPES.CHECK_USER_SESSION,CheckuserSession)
 }
 //signingUSerUp

function* SignUPWithEmailANdPasswordProgress({payload}){
const {email,password,displayName} = payload;
try{
        const {user } = yield call( CreateUser,email,password);
         yield call(GetUserSnapShotData,user,{displayName})
}catch(err){
        console.log(err)
        yield put(SIGN_IN_FAIID(err))
}
}

 //signingUSerUp Pointer 



function* OnSignUSerUp(){
yield takeLatest(USERTYPES.EMAIL_SIGN_UP_START,SignUPWithEmailANdPasswordProgress)
}


 //signingIn WIth EMail&password;
function* SignInWithEmailANdPasswordProgress({payload}){
const{email,password} = payload;
try{
   const {user}=     yield  call(signIn,email,password);
   yield call(GetUserSnapShotData,user)


}catch(err){

        yield put(SIGN_IN_FAIID(err))

}
}
 //signingIn WIth EMail&password Pointer
function* OnSignInStart (){
        yield takeLatest(USERTYPES.EMAIL_SIGN_IN_START,SignInWithEmailANdPasswordProgress)
}


 //google signin  
function* GoogleSignIn(){
      try{  
        const {user}= yield call( signInWithGoogle);
        yield call(GetUserSnapShotData,user)}
        catch(err){

        }
 }
  //google signin pointer
function* OnSignInWIthGoogleStart(){
       yield takeLatest(USERTYPES.GOOGLE_SIGN_IN_START,GoogleSignIn)
}



//signing user out 
function* SigningUserOut(){
        try {
                yield call(signUserOut) ;
                yield put(SIGNUSEROUT())

        }catch(err){
                yield put(SIGN_IN_FAIID(err))

        }
}
//signing user out start point
function* userSignOut (){
        yield takeLatest(USERTYPES.SIGN_OUT_START,SigningUserOut)
}


//userImageUpload
function* uploadUserImageProgress({payload:{image,user}}){
        try{
                //  console.log(snapShot)
               const userImageObject= yield call(adduserImageToStorage,image,user);
               const addToDataBase = yield call(
                addUserDataBase,
                {imageUrl:userImageObject.imageDownloadUrl},
                userImageObject.user)

               console.log(userImageObject,addToDataBase);
               const {currentUser} = yield call(OnAuthChangesAsync);
               const snapShot = yield call(GetUserFromDocs,currentUser);
                const {id} =snapShot
                yield put(UploadUserImageSuccess({id,...snapShot.data()}))
                }
                        catch(err){
                                console.log(err)
                                                }



// console.log(image,user)
        // image call(

}
function* UploadUserImageStart(){
        yield takeLatest(USERTYPES.UploadUserImageStart,uploadUserImageProgress)
}


// upload user start 
function* UploadUserDataProgress({payload:{data,user}}){
        console.log(data,user);

        yield call(addUserDataBase,data,user);
        const {currentUser} = yield call(OnAuthChangesAsync);
        const snapShot = yield call(GetUserFromDocs,currentUser);
        const {id} =snapShot
        yield put(UploadUserDataSuccess({id,...snapShot.data()}))
}

function* UploadUserDataStart(){
        yield takeLatest(USERTYPES.UploadUserDataStart,UploadUserDataProgress)
}
export function* CombineUserSaga(){
   yield all([
        call(onCheckUserSession),
        call(OnSignInWIthGoogleStart),
        call(userSignOut),
        call(OnSignInStart),
        call(OnSignUSerUp),
        call(UploadUserImageStart),
        call(UploadUserDataStart)
])

}