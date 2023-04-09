import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartContext } from '../../../contexts/HandleCart';
import { setItemsAfterRemoved, setOpen } from '../../../store/cart/cart.action';
import { CartOpen, cartItems } from '../../../store/cart/cart.selector';
import './cartItem.scss';
import { useNavigate } from 'react-router-dom';
import { handleRouteGuide } from '../../../componentsutlts/handleRouteGuide';
import { CatougriesSelector } from '../../../store/categories/category.selector';

const CartItem = ({cartItem})=>{
  const dispatch = useDispatch();
  const catogriesItems = useSelector(CatougriesSelector);
  const opening = useSelector(CartOpen);

  const cartItemsMap = useSelector(cartItems)
    const {name,price,imageUrl,quantity} = cartItem;
     const removeItemFromCard = ()=>{
      dispatch(setItemsAfterRemoved(cartItem,cartItemsMap))
      
    }
    const location =  useNavigate();
    
    const  handleLink = ()=>{
      console.log('hallo')

     handleRouteGuide(catogriesItems ,location,name)
     dispatch(setOpen(!opening))
 
    }
 return(
  
          <li   className="flex py-6 cart_item">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
              onClick={handleLink}
                src={imageUrl}
                alt={name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <p style={{cursor:'pointer'}}    
                    onClick={handleLink}

                     >{name}</p>
                  </h3>
                  <p className="ml-4">{price}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {quantity}</p>

                <div className="flex">
                  <button onClick={removeItemFromCard}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        
     

)
}
export default CartItem