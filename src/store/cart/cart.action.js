import { CreateAction } from "../utl/createAction";
import { CartActions } from "./cart.types";
import * as cart from './cart.reducer'
export  const setOpen = (bool)=> CreateAction(CartActions.SET_CART_OPEN,bool) ;

export const AddItemToCartFunc= (Product,items)=>{
      const newItems =   cart.HandleCartItems(items,Product);
   return cart.HandleReducerFunction(newItems);

}
export const setItemsAfterRemoved = (product,items)=>{

    const itemsAfterRomveItem=   items.filter(item=>item.id!==product.id);
   return cart.HandleReducerFunction(itemsAfterRomveItem)

}