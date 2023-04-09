import{CreateAction} from '../utl/createAction';
import{USERTYPES} from './user.types'
/* 
    SET_CURRENT_USER:"USER/SET_CURRENT_USER",
    CHECK_USER_SESSION:"USER/CHECK_USER_SESSION",
    EMAIL_SIGN_IN_START:"USER/EMAIL_SIGN_IN_START",
    GOOGLE_SIGN_IN_START:"USER/GOOGLE_SIGN_IN_START",
    SIGN_IN_SUCCESS:"USER/SIGN_IN_SUCCESS",
    SIGN_IN_FAIID:"USER/SIGN_IN_FAIID",
*/

export const setUser = (user)=> 
CreateAction(USERTYPES.SET_CURRENT_USER,user);

export const checkUserSession=() =>
 CreateAction(USERTYPES.CHECK_USER_SESSION);


export const EmailSignInStart =
({email,password})=> 
CreateAction(USERTYPES.EMAIL_SIGN_IN_START,{email,password});

export const EMAILSIGNUPSTART =
({email,password,displayName})=> 
CreateAction(USERTYPES.EMAIL_SIGN_UP_START,{email,password,displayName});

export const GoogleSignIn =()=>
 CreateAction(USERTYPES.GOOGLE_SIGN_IN_START);

export const SIGN_IN_SUCCESS =(user)=>
 CreateAction(USERTYPES.SIGN_IN_SUCCESS,user);

export const SIGN_IN_FAIID =(error)=> 
CreateAction(USERTYPES.SIGN_IN_FAIID,error);

export const SIGNUSEROUT_Start =()=>
 CreateAction(USERTYPES.SIGN_OUT_START);

export const SIGNUSEROUT =()=>
 CreateAction(USERTYPES.SIGN_OUT);
export const UploadUserImageStart =(image,user)=>
 CreateAction(USERTYPES.UploadUserImageStart,{image,user});
export const UploadUserImageSuccess =(user)=>
 CreateAction(USERTYPES.UploadUserImageSuccess,user);
export const UploadUserDataStart =(data={},user)=>
 CreateAction(USERTYPES.UploadUserDataStart,{data,user});
export const UploadUserDataSuccess =(user)=>
 CreateAction(USERTYPES.UploadUserDataSuccess,user);