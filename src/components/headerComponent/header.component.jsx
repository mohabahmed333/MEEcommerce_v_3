import React, {  Fragment, useContext, useState } from'react';
import {HeaderContainerComponent,LogoContainer,NavLinks,NavLink} from './headerStyled.component.jsx';
import {  Outlet} from 'react-router-dom';
import{ReactComponent as Logo} from '../../assets/logo.svg';
  import { DropDown } from  '../customs/notificationComponent/dropDown';
import{ReactComponent as WishList} from '../../assets/wishList.svg'
import { CartIcon } from '../addToCart/addToCart_iconComponent/add_toCartIcon.component';
import { DropDownComponent } from '../addToCart/addToCard_DropDownComponent/addToCart_dropDown.component';
 import DrawerComponent from '../customs/drawer/drawer';
import WishListContainer from '../wishList.components/wishlist.component'
import { WishListContext } from '../../contexts/wishList';
import ShoppingCart from '../customs/cart/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectMemo } from '../../store/user/user.selector.js';
import { setOpen } from '../../store/cart/cart.action.js';
import { CartOpen, totalCart, totalPaid } from '../../store/cart/cart.selector.js';
const  HeaderComponent= ()=>{
    const open = useSelector(CartOpen);
    const totalcart = useSelector(totalCart);
     const dispatch = useDispatch()
 const {isOpen,setIsOpen}= useContext(WishListContext)
const showDrawer = () => {
    setIsOpen(!isOpen);
};
 const currentUser = useSelector(userSelectMemo)

const HandleDropDown = ()=>{
    dispatch( setOpen(!open))

}
return (
    <Fragment>

    <div className="container"> 
<HeaderContainerComponent  >

    <LogoContainer className='logo-container' to='/'>
        <Logo className='logo'/>
    </LogoContainer>
    <NavLinks className='options'>
 
    <NavLink className='option' to='/shop'>

shop
    </NavLink>
    <NavLink className='option' to='/' >

Contact
    </NavLink>


{  currentUser!==null?(<DropDown user={currentUser}   /> ):
( <NavLink className='option' to='/sign'>

sign in
    </NavLink>
    

    )}
  
    
    <WishList className="ms-2 me-2" 
    style={{width:'30px',cursor:'pointer',margin:'0px 10px'}}
    onClick={showDrawer}
    />
   
<CartIcon totalcart={totalcart} onClick={HandleDropDown}/>
    </NavLinks>

    {/* {open && <Example/>} */}
   


   <DrawerComponent >
    <WishListContainer/>
   </DrawerComponent>
   <ShoppingCart>
    <DropDownComponent/>
    </ShoppingCart>
</HeaderContainerComponent>
</div>
<Outlet/>

 </Fragment>


    
)

    
}
export default HeaderComponent;