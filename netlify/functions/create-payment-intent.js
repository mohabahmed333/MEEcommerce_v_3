require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY)
exports.handler = async(event)=>{
     try{
        const {amount} = JSON.parse(event.body);
         const paymentIntents = await stripe.paymentIntents.create({
            amount,
            currency:'usd',
            payment_method_types:["card"]
        });
         return{
            statusCode:200,
            body:JSON.stringify(paymentIntents)
        }
    }catch(err){
         return{
            statusCode:400,
            body:JSON.stringify({err})
        }
    }

}