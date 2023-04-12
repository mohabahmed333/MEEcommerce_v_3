import React, { Suspense } from 'react';
import { Routes,Route, useParams } from 'react-router-dom';
import SignIn from '../../components/login/signIn/sign-in.component';
  import './signInAndSignOut.page.scss';
import { lazy } from 'react';
const LazySignInOut = lazy(()=>import('../../components/login/signInAndOutCampign/signInAndSignOutComponent'))
const SignInAndSignOut =()=>{
 
 return (    <Routes>
     <Route path=":singUser"  element={ <Suspense fallback={'loading...'}> <LazySignInOut/> </Suspense>}/>
  </Routes>
  
  )
    // <div className="sign-in-sign-out">

    //     <SignIn/>
    //     <SignUp/>
    // </div>
  

}


export default SignInAndSignOut