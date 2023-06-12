import React,{useContext, useEffect, useState} from "react";
   import './collection-item.scss';
 import{AddItemToCartFunc}from '../../store/cart/cart.action'
import { WishListContext } from "../../contexts/wishList";
import {  useNavigate } from "react-router-dom";
import{handleRouteGuide} from '../../componentsutlts/handleRouteGuide'
 import { useDispatch, useSelector } from "react-redux";
import{CatougriesSelector} from '../../store/categories/category.selector'
import { cartItems } from "../../store/cart/cart.selector";
 import { PreviewContext } from "../../contexts/previewContext";
 import { UploadUserDataStart, UploadUserDataSuccess } from "../../store/user/user.actions";
import { userSelectMemo } from "../../store/user/user.selector";
 import ShareWIthADD from "../share with Component/ADDTOCOLLECTIONShareWIth";
import {LazyLoadImage} from 'react-lazy-load-image-component'
 const CollectionItem = ({ col,url='',item,cat})=>{
 //js script
 const items=[
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        facebook
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        whatsapp
      </a>
    ),
    // icon: <SmileOutlined />,
    disabled: false,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
       instgram
      </a>
    ),
    disabled: false,
  },
  {
    key: '4',
     label: 'pinrest',
  },
];
      const [isModalOpen, setIsModalOpen] = useState(false);
      
  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
// cart js


 
 

 

 
 
// cart js

// js script
const cart = useSelector(cartItems)
const{setWishListItems,wishList,HandleWishList} = useContext(WishListContext);
  const {setOpen,setItem} = useContext(PreviewContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const catogriesItems = useSelector(CatougriesSelector);
  const ItemsCart = useSelector(cartItems);
  const user =useSelector(userSelectMemo)
  const product = item
      const {name,price,imageUrl } = product;
      const openPreviewItem = ()=>{
      setOpen(true);
      setItem(product)
 
    }
  
    const location =  useNavigate();
   const  handleLink = ()=>{
    handleRouteGuide(catogriesItems,location,name)

   }
   let  str = name.replaceAll(' ', '')   ;
const addToUSer = (user_name)=>{
  setTimeout(()=>{
    user_name&&dispatch(UploadUserDataStart({cart:cart},user));


  },1000)
}

const HandleCartSubmit = (e)=>{
  const dispatchReturn=     dispatch(AddItemToCartFunc(product,ItemsCart));

  
      addToUSer(user)
      // return message.success(`added ${name} to cart ` )
    }
    // useEffect(()=>{
    //   // var cartButtons = document.querySelectorAll('.cart-button');
    //   // var card_value = document.querySelector(".added");
    //   // var pqtplus = document.querySelector(".pqt-plus");
    //   // var pqtminus = document.querySelector(".pqt-minus");
    //   var cartvalue = 0;
   
      
      
    //   // cartButtons.forEach(button => {
    //   //   button.addEventListener('click', cartClick);
    //   // });
    //   // function cartClick() {
    //   //   let button = this;
    //   //   button.classList.add('clicked');
    //   //     // card_value.textContent = cartvalue += 1;
    //   // }
      
    //   // pqtplus.addEventListener('click', function(){
    //   //     if(card_value.nodeValue <= 0){
    //   //      card_value.textContent = cartvalue +=1;
    //   //     }
    //   // });
      
    //   // pqtminus.addEventListener('click', function(){
    //   //     if(Number(card_value.innerText) - 1 >= 0){
    //   //         card_value.textContent = cartvalue -=1;
    //   // }
    //   // });
    
    // },[])
      return <>
      
       <div    className={col?col:'item' }>
       <div className='new_item  '>
       <p className='product_name'> 
        <i className="fa-solid fa-bookmark"></i>
        <i className="fa-solid fa-heart"></i>
        </p>
    <div className='new_item_image'    >
      <LazyLoadImage src={imageUrl}  filter='blur'  onClick={handleLink}/>
      <div className='rating_name'>
          <button className='cart_button_new' onClick={HandleCartSubmit}>add To Cart 
          <p className="button_price"> {price}</p></button>
        <p className='item_rating'>
          4 <i className="fa-solid fa-star"></i>
        </p>
      </div>
 
    </div>
    <div className='p_end'>

  <div className="rev_name">
<p className="name">
  
{name}
</p>

  </div>



    </div>
    <div className="menu_end">
    <div className='rev'>
 
 <p className='rev_inner' onClick={()=>HandleWishList(user,product)}><i className="fa-regular fa-heart"></i> 250 <span>loves</span> </p>
 <p className='rev_inner'><i className="fa-regular fa-message"></i>25 <span>review</span> </p>


</div>
      
    <div className="menu">
    <i className="fa-regular fa-eye" onClick={openPreviewItem}></i>
          
          <a onClick={(e) => showModal(e)}>
             <i className="fa-solid fa-ellipsis-vertical"></i>
           </a>
                   </div>
                   </div>
  </div>
  

       
  </div>
<ShareWIthADD isModalOpen={isModalOpen} setModel={setIsModalOpen}/>

 </>
  
}

export default CollectionItem
