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
      
       <div class="itemcontainer">
        {/* <div className="item_header">
          <div className="d-flex h_l">
          <Tooltip placement="top"  title={'Add To Collection'}  >
                 
                 <i className="fa-regular fa-bookmark"></i>
                 </Tooltip>

          </div>
          <div className="h_c">
          <div class="see_numbers"> 

0
 <Tooltip placement="top" color="geekblue"  title={'comments'}  >

<i className="fa-regular fa-comment"></i>
</Tooltip>     
</div>
          <div class="see_numbers">
                            0
                         
                            <Tooltip placement="top"  title={'Rate'}  >

                            <StarOutlined />
</Tooltip>
                        </div>
          </div>
          <div className="d-flex h_r">
          <div class="menu">
            <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <i className="fa-solid fa-share"></i>       
      </Space>
    </a>
  </Dropdown>            </div>

          </div>
        </div> */}
        
        <div class="created_container">
                <h6>
                    {name} 
                    </h6> 
           <div class="menu">
          
    <a onClick={(e) => showModal(e)}>
      <Space>
      <i class="fa-solid fa-ellipsis-vertical"></i>
            </Space>
    </a>
             </div>
            </div>
        <div className="c_all">

         <div class="image_preview">

            <Image  style={{height:'250px'}} width={'100%'}src={imageUrl} alt="" srcset=""/>
        
        <div class="add_love_creator">
     
            
        </div>
        </div>
      <div className="i_foot">
      <div className="c">
        <div class="item_header">

            <div class="car">
       
            {/* <div className="d-flex h_l">
          <Tooltip placement="top"  title={'Add To Collection'}  >
                 
                 <i className="fa-regular fa-bookmark"></i>
                 </Tooltip>

          </div>
          <div className="h_c">
         
          <div class="see_numbers">
                            0
                         
                            <Tooltip placement="top"  title={'Rate'}  >

                            <StarOutlined />
</Tooltip>
                        </div>
          </div>   */}
              <p className="price">   {price} $</p>
          {/* <i class="fa-solid fa-bag-shopping" ></i> */}
          <i class="fa-solid fa-plus "onClick={HandleCartSubmit}></i>
            </div>
            <div class="name_price">

               
<div class="d-flex">

<div className="d-flex h_l">
          <Tooltip placement="top"   title={'Add To Collection'}  >
                 
                 <i className="fa-regular i_top fa-bookmark" id="book"></i>
                 </Tooltip>

          </div>
          <div className="h_c">
         
          {/* <div class="see_numbers">
                            0
                         
                            <Tooltip placement="top" 
                             title={'Rate'}  >

                            <StarOutlined />
</Tooltip>
                        </div> */}
          </div>  
 
    <div class="see_numbers">
        115
        <br/>
        <Tooltip placement="top" color="geekblue"  title={'Preview'}  >

        <i onClick={openPreviewItem}className="fa-regular fa-eye"></i>
    </Tooltip>
    </div>
    <div class="love_numbers">
        19
        <br/>
<Tooltip placement="top"  title={'Add To Wishlist'}  color="red
" >

        <i className="fa-regular fa-heart" onClick={()=>HandleWishList(user,product)}></i>
        </Tooltip>
    </div>
</div>
</div>
        </div>
         
            <div class="cart_name">
               

             
            </div>
         
    </div>

    {/* <div class="cartEnd c_2">
     <button class="add_TO_button" >Add To Cart
 </button>
      </div> */}
    
{/* <div class="stock">
        <div className="d-flex">
        <div class="created_by">ME </div>   
        </div>
         <p class='in_stoke'>
          </p> Mohab Elbasiry
        </div> */}
       </div>
 
    </div>
    </div>

       
  </div>
<ShareWIthADD isModalOpen={isModalOpen} setModel={setIsModalOpen}/>

 </>
  
}

export default CollectionItem
