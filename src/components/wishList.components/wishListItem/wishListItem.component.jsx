import './wishList.component.scss';
import{Button ,Divider, message} from 'antd';
import{useContext} from 'react';
import{AddItemToCartFunc}from '../../../store/cart/cart.action'

import { WishListContext } from '../../../contexts/wishList';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectMemo } from '../../../store/user/user.selector';
import { UploadUserDataStart } from '../../../store/user/user.actions';
import { handleRouteGuide } from '../../../componentsutlts/handleRouteGuide';
import { CatougriesSelector } from '../../../store/categories/category.selector';
import { useNavigate } from 'react-router-dom';

const WishListItem = ({product})=>{
    const user =useSelector(userSelectMemo);
    const{wishList}=user;
     const cartItems = useSelector(state=>state.cart.items)
// const {setWishList,wishList}=useContext(WishListContext)
const{imageUrl,name,price}=product;
const dispatch  = useDispatch();
const {setIsOpen,isOpen}= useContext(WishListContext)
// console.log(product)
const HandlerAddToCart =()=>dispatch(AddItemToCartFunc(product,cartItems)) ;
const removeFromCart = ()=>{
 // setWishList(RemoveditemsList)
 dispatch(UploadUserDataStart({wishList: wishList.filter(item=>item.id !==product.id)},user))
return message.warn(`remove ${product.name} from wishlist`)    ;
}
const catogriesItems = useSelector(CatougriesSelector);
 const location = useNavigate()
const HandleClick = ()=>{
    handleRouteGuide(catogriesItems ,location,name);
    setIsOpen(!isOpen)
}
 return(
    product?(
        <>
        <div className="cart-item-container mb-5">
<img src={imageUrl} className='img' style={{  
      width: '200px',
    height: '150px',
    'border-radius': '10px'
     }}   alt=""
     onClick={HandleClick}
     /> 
<div className='item-details'>
    <div className="item-inner">
    <Button className='x' onClick={removeFromCart}>x</Button>
             <h2 className='name' onClick={HandleClick}>{name}</h2>
    </div>
    <h3>{(price)}</h3>
<Button onClick={HandlerAddToCart} className='b'>addToCart</Button>
</div>
</div>
<Divider />
</>
):(<h1>there's</h1>)

)
}


export default WishListItem