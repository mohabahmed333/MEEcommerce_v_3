import React from 'react';
import { Routes,Route, useParams } from 'react-router-dom';
import SignIn from '../../components/login/signIn/sign-in.component';
import { SignInAndSignComponent } from '../../components/login/signInAndOutCampign/signInAndSignOutComponent';
import SignUp from '../../components/login/signUp/signUp'
import './signInAndSignOut.page.scss';


const SignInAndSignOut =()=>{
 
 return (    <Routes>
     <Route path=":singUser"  element={ <SignInAndSignComponent/>}/>
  </Routes>
  
  )
    // <div className="sign-in-sign-out">

    //     <SignIn/>
    //     <SignUp/>
    // </div>
  

}


export default SignInAndSignOut