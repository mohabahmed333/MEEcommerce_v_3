import { createSelector } from "reselect";
const cartItemsReducer = (state)=>state.cart;
const CartOpenReducer = (state)=>state.cart.open;




export const cartItems = createSelector([cartItemsReducer],({items})=> 
 items)
export const CartOpen = createSelector([CartOpenReducer],(isOpen)=> 
 isOpen)
export const totalPaid = createSelector([cartItemsReducer],({items})=> 
items.length!==0? items.reduce((price,item)=>{
      return price+item.price*item.quantity
},0):0
)
export const totalCart  = createSelector([cartItemsReducer],({items})=>  
items.length!==0?items.reduce((total,product)=>{
    return total+product.quantity
},0):0
)