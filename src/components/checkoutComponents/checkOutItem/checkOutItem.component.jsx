import { Button,InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
 import {AddItemToCartFunc,setItemsAfterRemoved} from '../../../store/cart/cart.action'
import { HandleReducerFunction } from "../../../store/cart/cart.reducer";
import { cartItems } from "../../../store/cart/cart.selector";
import './checkOut.css'
const CheckOutItem  =({CartItem})=>{
    const {name,price,imageUrl,quantity,id} = CartItem;
    const items = useSelector(cartItems)
    const dispatch = useDispatch()
    const RemoveItem = ()=>{
            
            dispatch(setItemsAfterRemoved(CartItem,items))
         }
         const onChange = (value) => {
           
            const existing_item =items.find(item=>item.id===id);
            if(value===0 && existing_item){
               dispatch(setItemsAfterRemoved(existing_item,items))
            }
           else{
            const itemsArray = items.map((i,idx)=>{
                    if(i.id===id){
                   
                       return{
                           ...i,
                           quantity:value
                       }
                   } else{
                       return i
                   }

           
               })
               
               dispatch(HandleReducerFunction(itemsArray))

           }
                   
          }
    return(
    <tr>
        <td style={{width:'90'}}>
            <div   className="cart-product-imitation">
                <img src={imageUrl} alt=""  style={{margin:'10px 0px',height:'100px,' ,width:'100px',borderRadius:'6px'}} />
            </div>
        </td>
        <td className="desc">
            <h3>
                <a href="#" className="text-navy">
                {name}
                </a>
            </h3>
           
           

        </td>

     <td>
        
     <div className="m-t-sm">                
                <Button  onClick={RemoveItem}  className="text-muted"><i className="fa fa-trash"></i>
                 Delete</Button>
            </div>
     </td>
         <td className="">
        <InputNumber min={0} max={100} defaultValue={quantity}   onChange={onChange} />         
            <p className="text-center">
                ${price*quantity}
            </p>
        </td>
    </tr>
)

}
export default CheckOutItem