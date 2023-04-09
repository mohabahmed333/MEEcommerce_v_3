import { useReducer } from "react";
import { createContext,useContext,useEffect,useState } from "react";
 export const CartContext = createContext(
    {   open:false,
       setOpen:()=>{},
        items:[],
       AddItemToCartFunc:()=>{},
       totalCart:0,
        totalPaid:0,
        HandleReducerFunction:()=>{}
      
       }
   );
const INITIALSTATE = {
    items:[],
    open:false,
    totalCart:0,
    totalPaid:0 
}
const CartActions = {
    SET_CART_ITEM:"SET_CART_ITEM",
    SET_CART_OPEN:"SET_CART_OPEN"
}
const CartReducer = (state,action)=>{
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
    }

}

const HandleCartItems = (items,productItem)=>{
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
 
export const CartProvider = ({children})=>{
    const [{totalPaid,totalCart,items,open},dispatch]= useReducer(CartReducer,INITIALSTATE);
    const HandleReducerFunction= (newItems)=>{
        const PaidItems = newItems.reduce((price,item)=>{
             return price+item.price*item.quantity
        },0);
         const newCalCulateItem =newItems.reduce((total,product)=>{
            return total+product.quantity
        },0);
   
         
        dispatch({type:'SET_CART_ITEM',payload:{items:newItems,totalCart:newCalCulateItem,totalPaid:PaidItems}});
    }
    const setOpen = (bool)=>{
        dispatch({type:CartActions.SET_CART_OPEN,payload:bool})
    }
 
const AddItemToCartFunc= (Product)=>{
   const newItems =   HandleCartItems(items,Product);
   HandleReducerFunction(newItems)
 }
const setItemsAfterRemoved = (product)=>{
  const itemsAfterRomveItem=   items.filter(item=>item.id!==product.id);
  HandleReducerFunction(itemsAfterRomveItem)
 
}
const value = {open,AddItemToCartFunc,items,totalCart,totalPaid,setItemsAfterRemoved,HandleReducerFunction,setOpen};
    return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}