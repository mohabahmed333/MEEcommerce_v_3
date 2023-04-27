import {React,useState,useEffect} from "react";
import FormInputComponent from "../../customs/custom-input-compnent/custom-input.component";
import CustomButton from'../../customs/custombuttons/custombutton1'
import './signUp.scss'
import {CreateUser} from '../../../firebase/firebaseMtethods/signUpWithEmail&password'
import{GetUserFromDocs}from '../../../firebase/firebaseMtethods/connectuserToDocs'
import { useDispatch } from "react-redux";
import { EMAILSIGNUPSTART } from "../../../store/user/user.actions";
import ImageWithText from "../../ImageWithText/ImageWithText";
import { Button } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

const initialFormFeild = {
    displayName:'',
    email:'',
    password:'',
    confrimPassword:''
} 

const  SignUp = ( ) => {
let Error= null;
const [formFeilds,setFormFeilds]=useState(initialFormFeild);
const {displayName,email,password,confrimPassword} = formFeilds;
const dispatch = useDispatch();
const navigate = useNavigate()
const setForm = ()=>{
    setFormFeilds(initialFormFeild)
}

const finshedSubmition = ()=>{
    dispatch(EMAILSIGNUPSTART({email,password,displayName}));
    navigate('/')
}
const HandleSubmit = async (event)=>{
    event.preventDefault();

    if(password!==confrimPassword){
        Error="password don't match";
     }
   if(
    password.trim().toLocaleLowerCase() === confrimPassword.trim().toLocaleLowerCase()
    && displayName && email
   ){return finshedSubmition()}
     
   

    //  switch(){
    //     case 'auth/email-already-in-use':
        
    //         return     Error = 'this email is already exist';
    // }
    
    //pasword


}

const HandleChange=(event)=>{
const {value,name}= event.target;

setFormFeilds({
    ...formFeilds,
    [name]:value}
    )
 }

return (
    <div className="sing_all d-flex">


 
    <ImageWithText  image={'https://us.123rf.com/450wm/mmfcreative/mmfcreative2010/mmfcreative201002376/mmfcreative201002376.jpg?ver=6'}/>
<div className="sign-in">
{/* <h2>I Already have an account </h2> */}
<h5 style={{textAlign:'center'}}>sign Up</h5>



    <form  required >
    <FormInputComponent
        type="text"
        name="displayName"
        label='firstname'
        value= {displayName}
        HandleChange={HandleChange} required/>

        <FormInputComponent
        type="email"
        name="email"
        label='email'
        value={email}
        HandleChange={HandleChange}/>
        <FormInputComponent
        type="password"
        name="password"
        label='password'
        value={password}
        HandleChange={HandleChange} required/>
 
        <FormInputComponent
        type="password"
        name="confrimPassword"
        label='confrimPassword'
        value={confrimPassword}
        HandleChange={HandleChange} required/>
 
    {
        !Error?(<span>{Error}</span>):(<span>keep Going</span>)
    }

<div className="d-flex justify-content-center">

        <Button onClick={HandleSubmit} className="primary w-100" type="submit">
            sign up
        </Button>
</div>
    </form>
</div>
</div>


)


}
export default  SignUp;