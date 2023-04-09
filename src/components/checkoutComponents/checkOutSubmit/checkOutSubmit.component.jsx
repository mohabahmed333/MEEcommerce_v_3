import { CardElement ,useStripe,useElements} from "@stripe/react-stripe-js";
import{useDispatch, useSelector}from 'react-redux';
import {useState}from 'react';
import{totalPaid} from '../../../store/cart/cart.selector';
import{userSelectMemo} from '../../../store/user/user.selector';
import { Button, message } from "antd";
import { useContext } from "react";
import { checkOutContext } from "../../../contexts/checkout.context";
import { Holder,FormHolder, ANtButton } from "./checkOutsubmit.styles";
import { UploadUserDataStart } from "../../../store/user/user.actions";
import { Navigate, useNavigate } from "react-router-dom";
 const AddUserOrderData =(userInfo,currentUser)=>{

  console.log(userInfo,currentUser)
  if(!currentUser){
    return
  }else{
return (paymentInferomation)=>{
  const {cart}=currentUser
  const order = {
    id:Math.random()*50,
    userInferomation:userInfo,
    orderDetails:cart.cart,
    deliveried:false,
    paymentI:paymentInferomation,
    PaymentDate:new Date()
  };
 
console.log(order)
  return order
}
   
  }
}
  export const CheckOutSubmit = ({userInfo})=>{
const navigate = useNavigate()

    const dispatch=  useDispatch()
    const user= useSelector(userSelectMemo);
    // const [orders,setOrders]= useState([])
       
    const amount = useSelector(totalPaid);
    const [loadings, setLoadings] = useState(false);
     const stripe = useStripe();
    const elements = useElements();
    const PaymentHandler =  async (e)=>{
        e.preventDefault(); 
        setLoadings(true)
if(!stripe &&!elements )return;
const successMessage =message.success('Processing complete!')
// const faildMessage =message.faild('Processing faild!');
try{
  const response = await fetch('/.netlify/functions/create-payment-intent',{
    method:'post',
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify({amount:1000*100}),
}).then((res=>res.json()));


const {client_secret} =response;
console.log(client_secret)
const paymentResult = await stripe.confirmCardPayment(client_secret,{
  payment_method:{
    card:elements.getElement(CardElement),
    billing_details:{
      name:user?user.displayName:'Guest'
    }
  }
})


if(user){
  const currentUser = user;
//  setOrders(user.orders)
   if(!user.orders)dispatch(UploadUserDataStart({orders:[]},user));
  //  dispatch(UploadUserDataStart({orders:[]},user))
  if(paymentResult.error){
    console.log(paymentResult.error);
    setLoadings(false)
  }else if(paymentResult.paymentIntent.status==='succeeded'){
    
    setLoadings(false)
  
  
  
    // console.log(ordersA);
    if(currentUser.orders.length!==0){
      // return [...ordersA,currentUser.orders]
    }
  

 
  // console.log(orders)
  console.log(user.data)
  dispatch(UploadUserDataStart({orders:[...user.orders,AddUserOrderData(userInfo,currentUser)(paymentResult)]},user));
 
      // dispatch(UploadUserDataStart({...user.cart=[] },user))
 
//  clearInterval(settIngTimeOut)
navigate('/user')
    
  console.log('succed');
  }
 
}



}catch(err){
  // return faildMessage
  setLoadings(false)

}



    }
    return(
        <Holder >
          
            <div className='cartHolder'>
            <FormHolder  onSubmit={PaymentHandler}>
            <h6>subimt your payments </h6>

            <CardElement/>
    
      
                <ANtButton  type="primary" htmlType="submit" loading={loadings}  >
                Bay
              </ANtButton>
                

            </FormHolder>
           
</div>
         

         
           
        </Holder>
    )
}