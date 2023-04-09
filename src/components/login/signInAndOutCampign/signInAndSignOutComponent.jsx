import { useParams } from "react-router-dom"
import SignIn from "../signIn/sign-in.component"
import SignUp from "../signUp/signUp"

export const SignInAndSignComponent =  ()=>{
const {singUser} = useParams();
console.log(singUser)
    return(


    <>
<div className="container m-auto mt-5">

    {
         singUser.length!==0 &&   
         singUser === 'signIn' ?
    <SignIn/>:
    <SignUp/> 
    }
</div>

    </>
 

    )
}