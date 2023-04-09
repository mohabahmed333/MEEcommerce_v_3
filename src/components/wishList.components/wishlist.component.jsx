import { useContext } from "react";
import { useSelector } from "react-redux";
import{WishListContext } from '../../contexts/wishList'; 
import { userSelectMemo } from "../../store/user/user.selector";
import WishListItem from './wishListItem/wishListItem.component'
const WishListContainer = ()=>{
     const user =    useSelector(userSelectMemo);
    if(!user)return;
    const {wishList}=user
      return(
        wishList&& wishList.map((item,idx)=><WishListItem key={idx} product={item}/>)

)
}

export default WishListContainer;