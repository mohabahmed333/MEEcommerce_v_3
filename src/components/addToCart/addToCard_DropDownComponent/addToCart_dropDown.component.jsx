import './card_dropDown.scss';
import CartItem from '../cardItem.component/cartItem';
import { useSelector } from 'react-redux';
import { cartItems } from '../../../store/cart/cart.selector';
import { userSelectMemo } from '../../../store/user/user.selector';
import imgToats from '../../../assets/112087-empty.gif'
import ImageWithText from '../../ImageWithText/ImageWithText';
 export const DropDownComponent = ()=>{
const cart =  useSelector(cartItems);
const user = useSelector(userSelectMemo);
const ItemsTo = ()=>{
  // if(user&&user.cart.items.length>0 ){
  //   const{cart:{items}} =user;

    
  //   return user.cart.cart.items
  // }

  
  if(cart) return cart;
}
 
      return(
        <div className="mt-8">
        <div className="flow-root cart_container">
       

      { ItemsTo().length===0 ?
       <ImageWithText image={imgToats} text={'there is no item in cart yet !'}/> :''}

          <ul role="list" className="-my-6 divide-y divide-gray-200 ">
          {
           ItemsTo().length!==0 &&ItemsTo()&&    ItemsTo().map((item,idx)=>{

                   return (<CartItem key={item.name}  cartItem={item} className='card-items'/>)
                })
            }
 
  </ul>
</div>
  
</div>
          
    )
}