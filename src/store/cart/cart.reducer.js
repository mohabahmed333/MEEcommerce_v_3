 import { CartActions } from "./cart.types";
import {CreateAction}from '../utl/createAction'
const INITIALSTATE = {
    items:[],
    open:false,
 
}
export const CartReducer = (state=INITIALSTATE,action={})=>{
    const {type,payload} = action;
    switch(type){
        case CartActions['SET_CART_ITEM']:
            return{
                ...state,
                ...payload
            }
        case CartActions['SET_CART_OPEN']:
            return{
                ...state,
                 open:payload
            }
        default: return state

    }
}

 export   const HandleCartItems = (items,productItem)=>{
    //return item 
 const existingItem= items.find(product=>product.id===productItem.id)
if(existingItem){
 return items.map(cartItem=>cartItem.id===productItem.id
    ?{...cartItem,
        quantity:cartItem.quantity+1
    } 
    :cartItem
    )
}

return [...items ,{...productItem,quantity:1}]
}
export const HandleReducerFunction= (newItems)=>{  
    
       return  CreateAction(
            CartActions.SET_CART_ITEM,
            {items:newItems})
     }