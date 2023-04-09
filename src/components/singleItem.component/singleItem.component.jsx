import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
 import{CatougriesSelector} from '../../store/categories/category.selector';
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import SimillarProduct from "../similarProducts/similarproduct";
import{ImageContainer, ProductInfo} from './singleItem.styles';
import './singleProduct.scss'
import { Button, Image, message } from "antd";
import { AddItemToCartFunc } from "../../store/cart/cart.action";
import { cartItems } from "../../store/cart/cart.selector";
import { userContext } from "../../contexts/userContext";
import { WishListContext } from "../../contexts/wishList";
import { userSelectMemo } from "../../store/user/user.selector";
import{useContext} from 'react'
import { PreviewContext } from "../../contexts/previewContext";
import './newSingle.scss'
 export const SingleItem = ()=>{

const catogriesItems = useSelector(CatougriesSelector);
const {HandleWishList} = useContext(WishListContext)
    const {item,cat} = useParams();
  const ItemsCart = useSelector(cartItems);
     const [productIT,setProduct] = useState(catogriesItems);
     const user = useSelector(userSelectMemo);
  const {setOpen,setItem} = useContext(PreviewContext);
  const openPreviewItem = ()=>{
    setOpen(true);
    setItem(productIT)

  }
    const{name,imageUrl,price} = productIT;
     const dispatch = useDispatch()
    const HandleCartSubmit = (e)=>{
       dispatch(AddItemToCartFunc(product,ItemsCart));
      return message.success(`added ${name} to cart ` )
    }

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
  const reviews = { href: '#', average: 4, totalCount: 117 }
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
   function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  // window.onscroll = function() {Second()};

  // function Second() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 300) {
  //     document.getElementById("#mobile_nav").style.display='flex'
  //   } else {
  //     document.getElementById("#mobile_nav").style.display='none'
  //   }
  // }
    useEffect(() => {
        catogriesItems && Object.keys(catogriesItems).map(title=>{
            let st = item;
            st = st.replace(/([A-Z])/g, ' $1').trim();
               const it=catogriesItems[title].find(item=>item.name===st);
               if(it){
                setProduct(it);
               }else{
                return
               }
              }
            )
  }, [product,catogriesItems])
 
  
    return( <>
<div className="all_page">
<div className="all_page_three">

    <div className="product_descrption">
<h1 className="h1">{name}</h1>
<div className="right">
    <p>Designer Karim Rashid continues to put his signature spin on
         all genres of design through various collaborations with top-notch companies.
         .</p>
    <p>In stock. <a className='stock'href="">Buy Extended Warranty</a></p>
    </div>

        <div className="add_to">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-regular fa-share-from-square"></i>
        </div>
    </div>
    <div className="product_image"  >
      <Image  src={imageUrl}/>


    </div>
    <div className="product_color_size">
<div className="avalible_colors">
    Avalible Colors     
<ul className="product-color">
    <li>
      <input type="radio" name="color" id="red"/>
      <label for="red" style={{backgroundColor:'red'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#A2C2C9"/>
      <label for="#A2C2C9" style={{backgroundColor:'#A2C2C9'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#EFDBD4"/>
      <label for="#EFDBD4" style={{backgroundColor:'#EFDBD4' }}></label>
    </li>
    <li>
        <input type="radio" name="color" id="#00BCD4" checked="checked"/>
        <label for="#00BCD4" style={{backgroundColor:'#00BCD4'}}></label>
      </li>
    </ul>

</div>
<div className="avalible_sze">
 <fieldset className="picker">
    <legend>select Size </legend>
    <label for="size-s">
        <input type="radio" name="sizes" id="size-s"/>
        <span>S</span>
    </label>
    <label for="size-m">
        <input type="radio" name="sizes" id="size-m"/>
        <span>M</span>
    </label>
    <label for="size-l">
        <input type="radio" name="sizes" id="size-l"/>
        <span>L</span>
    </label>
    <label for="size-xl">
        <input type="radio" name="sizes" id="size-xl"/>
        <span>XL</span>
    </label>
    <label for="size-xxl">
        <input type="radio" name="sizes" id="size-xxl"/>
        <span>XXL</span>
    </label>
</fieldset>
</div>

<div className="add_to_cart">
    <div className="reviews">
        <p>
           <span className="fa fa-star yellow"></span>
           <span className="fa fa-star yellow"></span>
           <span className="fa fa-star yellow"></span>
           <span className="fa fa-star yellow"></span>
           <span className="fa fa-star"></span>
           <span>(4.67 - 172 reviews)</span>
         </p>
    </div>
    <div className="price_flex">

        <h3>Price</h3>
        <p> 22$ </p>
    </div>

    <button className="add_to_cart_product">
Add To Cart
</button>
</div>
    </div>
  

    
</div>
{/* <div className="next_PREV_PRODUCT">
  <div className="Next_product p">
    <p className="text-s">previous Product
    
    </p>
      
      <div className="product">
        <i class="fa-solid fa-arrow-left arrow-right"></i>
        <p>product Name</p>
       </div>
  </div>
  <div className="Prev_product p">
  <p className="text-s">Next Product
    
    </p>
    <div id="fb-root"></div>
      <div className="product">
        <p>product Name</p>
        <i class="fa-solid fa-arrow-right-long arrow-left"></i>
      </div>
  </div>
</div> */}
</div>
<div className="footers">
 
 
    
 <SimillarProduct/>
</div>
    </>
     )
}

