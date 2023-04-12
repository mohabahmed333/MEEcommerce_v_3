import { useParams } from "react-router-dom"
import SignIn from "../signIn/sign-in.component"
import SignUp from "../signUp/signUp"

const SignInAndSignComponent =  ()=>{
const {singUser} = useParams();
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
export default SignInAndSignComponent