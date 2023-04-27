import { message, notification } from 'antd';
import{useState,createContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectMemo } from '../store/user/user.selector';
import { UploadUserDataStart } from '../store/user/user.actions';


export const WishListContext = createContext({
    wishList:[],
    setWishList:()=>{},
    isOpen:false,
    setIsOpen:()=>{},
    wishListCount:0,
    setWishListItems:()=>{},
    removeItemFromWishList:()=>{},
    HandleWishList:()=>{}
});

const setWishListItemsHandler = (wishList,product)=>{
    // const user = useSelector(userSelectMemo);


 

const existingItem = wishList.find(item=>item.id===product.id);
if(existingItem){
   
    return wishList.filter(item=>{return item.id !== product.id})
}

    return[...wishList,product]
}
export const WishListProvider = ({children})=>{

const [wishList,setWishList]=useState([]);
const [isOpen,setIsOpen]=useState(false);
const [WishListCount,setWishListCount]=useState(0);
const dispatch = useDispatch();
const openNotification = (placement) => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        `you Have to login first To add to wishlist <a>hallo<a/>  `,
      placement
     });
  };
const setWishListItems = (item)=>{
            setWishList(setWishListItemsHandler(wishList,item));
            setWishListCount(wishList.length)
        }
const removeItemFromWishList = (product)=>{
    const neWITEMS = wishList.filter(item=>item!==product.id);
    setWishListCount(neWITEMS)
}
 const HandleWishList = (user,product)=>{

  if(!user&&!!product){
      openNotification('bottom');
      // navigate('/sign/signUp')
      return
     }
     if(!user.wishList)dispatch(UploadUserDataStart({wishList:[]},user))

      // setColor('red');
      setWishListItems(product);
        const existingItem = user.wishList.find(item=>item.id===product.id);
        if(existingItem){
          message.info(`this${existingItem.name} item is already in wishlist`)
            dispatch(UploadUserDataStart({wishList: user.wishList.filter(item=>item.id !==product.id)},user))
          return message.warn(`remove ${product.name} from wishlist`);
        }else{


            dispatch(UploadUserDataStart({wishList:[...user.wishList,product]},user))
        }
     
          // setColor('')   ;
       
 
      return message.success(`added ${product.name} to wishlist ` )

  }
 const value = {wishList,setWishList,isOpen,setIsOpen,WishListCount,setWishListItems,removeItemFromWishList,HandleWishList}

    return <WishListContext.Provider value={value}>{children}</WishListContext.Provider>
}