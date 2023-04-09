import { GoogleAuthProvider,
    signInWithPopup,
     signInWithRedirect,
    } from "firebase/auth";
import{auth} from'../firebase.utls'

// facebook provider
// export const facebookAuthProvider = new FacebookAuthProvider();
// facebookAuthProvider.addScope('user_birthday');
// facebookAuthProvider.setCustomParameters( {'display': 'popup'})
// export const SignInWithFacebookAccount = signInWithPopup(auth,facebookAuthProvider)
// facebook provider

// twitter
// export const twitterAuthProvider = new TwitterAuthProvider();
// twitterAuthProvider.setCustomParameters({
//     'lang': 'es'
//   });
// export const twitterSignPopUp = signInWithPopup(auth,twitterAuthProvider)
// twitter

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
export const signInWithGoogle = ()=> signInWithPopup(auth,GoogleProvider);
export const SignInwithRedirect =()=>signInWithRedirect(auth,GoogleProvider);



