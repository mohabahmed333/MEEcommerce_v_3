import React,{useContext, useEffect, useState} from "react";
import{EyeTwoTone, ShareAltOutlined, StarOutlined} from '@ant-design/icons';
import { Badge, Button, Image, message, notification, Rate, Tag, Tooltip } from 'antd';
import { ReactComponent as Cart } from "../../assets/addToCart.svg";
import './collection-item.scss';
import ToolTip from "../customs/AntToolTip/ToolTip";
import{AddItemToCartFunc}from '../../store/cart/cart.action'
import { WishListContext } from "../../contexts/wishList";
import {  useNavigate } from "react-router-dom";
import{handleRouteGuide} from '../../componentsutlts/handleRouteGuide'
import { AddToCartButton } from "../addToCart/addToCartButton/AddToCartButton";
import { useDispatch, useSelector } from "react-redux";
import{CatougriesSelector} from '../../store/categories/category.selector'
import { cartItems } from "../../store/cart/cart.selector";
import { PreviewComponent } from "../previewComponent/preview";
import { PreviewContext } from "../../contexts/previewContext";
import Item from "antd/lib/list/Item";
import { UploadUserDataStart, UploadUserDataSuccess } from "../../store/user/user.actions";
import { userSelectMemo } from "../../store/user/user.selector";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import ShareWIthADD from "../share with Component/ADDTOCOLLECTIONShareWIth";
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
   const{setWishListItems,wishList,HandleWishList} = useContext(WishListContext);
   

    const HandleCartSubmit = (e)=>{
      dispatch(AddItemToCartFunc(product,ItemsCart));
      return message.success(`added ${name} to cart ` )
    }
    useEffect(()=>{
      var cartButtons = document.querySelectorAll('.cart-button');
      var card_value = document.querySelector(".added");
      // var pqtplus = document.querySelector(".pqt-plus");
      // var pqtminus = document.querySelector(".pqt-minus");
      var cartvalue = 0;
   
      
      
      cartButtons.forEach(button => {
        button.addEventListener('click', cartClick);
      });
      function cartClick() {
        let button = this;
        button.classList.add('clicked');
          // card_value.textContent = cartvalue += 1;
      }
      
      // pqtplus.addEventListener('click', function(){
      //     if(card_value.nodeValue <= 0){
      //      card_value.textContent = cartvalue +=1;
      //     }
      // });
      
      // pqtminus.addEventListener('click', function(){
      //     if(Number(card_value.innerText) - 1 >= 0){
      //         card_value.textContent = cartvalue -=1;
      // }
      // });
    
    },[])
      return <>
      
       <div    className={col?col:'item' }>
       <div className='new_item  '>
       <p className='product_name'>   {name} 
        <i class="fa-solid fa-bookmark"></i>
        </p>
    <div className='new_item_image' onClick={handleLink} style={{backgroundImage:`url(${imageUrl})`}}>
      
      <div className='rating_name'>
          <button className='cart_button_new' onClick={HandleCartSubmit}>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
 
    </div>
    <div className='p_end'>

    <div className='rev'>
 
      <p className='rev_inner' onClick={()=>HandleWishList(user,product)}><i class="fa-regular fa-heart"></i> 250 <p>loves</p> </p>
      <p className='rev_inner'><i class="fa-regular fa-message"></i>250 <p>review</p> </p>


    </div>


    <i class="fa-regular fa-eye" onClick={openPreviewItem}></i>
    <div class="menu">
          
          <a onClick={(e) => showModal(e)}>
            <Space>
            <i class="fa-solid fa-ellipsis-vertical"></i>
                  </Space>
          </a>
                   </div>

    </div>
  </div>
  

       
  </div>
<ShareWIthADD isModalOpen={isModalOpen} setModel={setIsModalOpen}/>

 </>
  
}

export default CollectionItem
