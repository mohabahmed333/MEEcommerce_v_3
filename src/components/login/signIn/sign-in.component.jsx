import {React , useEffect,useState} from "react";
import { getRedirectResult } from "firebase/auth";
import FormInputComponent from "../../customs/custom-input-compnent/custom-input.component";
import CustomButton from'../../customs/custombuttons/custombutton1';
import signIn from '../../../firebase/firebaseMtethods/signInWithEmailAndPassword'
import 
{auth}from '../../../firebase/firebase.utls';
import './sign-in.component.scss'
  import { EmailSignInStart, GoogleSignIn } from "../../../store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import ImageWithText from "../../ImageWithText/ImageWithText";
import { Button, Input } from "antd";
import { ErrorMessageSelector, userSelectMemo } from "../../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
const initializingState = {
    email:'',
    password:''

}
const SignIn =  ()=> {
    const [err,SeetErrMessage] = useState('')
    const ErrorMess = useSelector(ErrorMessageSelector)
    const dispatch = useDispatch()
    const [stateValue,SetStateValue] = useState(initializingState);
    const {email,password} = stateValue;
    const navigate = useNavigate()

    
    const resetForm = ()=>{
        SetStateValue(initializingState)
    }
    const HandeleErrorMessage =(error)=>{


        switch(error){
    case 'Firebase: Error (auth/wrong-password).':
    return     SeetErrMessage('wrong password or email')
    
}
    }   
    const HandleSubmit =async  (e)=>{
        e.preventDefault();
        if(!email&&!password)return;
     dispatch(EmailSignInStart({email,password}))

        const{user:{error}} = ErrorMess;
        if(error&&error.length!==0){return  HandeleErrorMessage(error['message'])}else{

     navigate('/')

        };
      
}
const HandleChange=(event)=>{
    // console.log(event.target.name)
const {value,name}= event.target;
console.log(value,name)

SetStateValue({...stateValue,[name]:value})
// awsome 
}
useEffect(  ()=>{
    async function fetch(){
        const reDirectedResault =  await getRedirectResult(auth);
    }
fetch();
},[])
// signIn With Google
const signInUsingGoogle =   ()=>{
    dispatch(GoogleSignIn())

}

return (
    <div className="sing_all d-flex">
 
        <ImageWithText  image={'https://us.123rf.com/450wm/mmfcreative/mmfcreative2010/mmfcreative201002376/mmfcreative201002376.jpg?ver=6'}/>
    <div className="sign-in">
    {/* <h2>I Already have an account </h2> */}
    <h5 className="text-center mb-3">sign in</h5>


    <form   >
<label htmlFor="email"> Emal Adress</label>
        <Input
        id="email"

        type="email"
        name="email"
        label='email'
        value={email}
        onChange={HandleChange}/>
<label className="mt-3 " htmlFor="password"> Passwword</label>

        <Input
        id="password"
        className="mb-3"
        type="password"
        name="password"
        label='password'
        value={password}
        onChange={HandleChange}/>
<div className="error text-danger mb-3">
    {err}
</div>
    <div className="d-flex flex-column" >

      
    <Button  type='submit' className="primary" onClick={HandleSubmit}   >
            sign in 
        </Button>
        <Button  type="text" color="#4285f4" onClick={signInUsingGoogle} >
            sign in With Google
        </Button>
    </div>
   

    </form>
</div>
</div>


)

}

export default  SignIn;