import {   useContext, useEffect, useState } from 'react'
  import { StarIcon } from '@heroicons/react/20/solid'
import { PreviewContext } from '../../contexts/previewContext'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemToCartFunc } from '../../store/cart/cart.action'
import { cartItems } from '../../store/cart/cart.selector'
import { Divider, Image, InputNumber, Space, Tag, message } from 'antd';
 
  import './preview.scss';
import {  FacebookFilled, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
 import Modal from 'react-bootstrap/Modal';
import { CatougriesSelector } from '../../store/categories/category.selector'
import { useParams } from 'react-router-dom'
import $ from 'jquery'
import { touchHelper } from '../../componentsutlts/touch_helber_function'
import { Offcanvas, Tab, Tabs } from 'react-bootstrap'
import './new_css.scss'
import { getAverageColor } from '../../componentsutlts/imageColor'
const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false },
    ],
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export const PreviewComponent = ( )=>{
    const {item,open,setOpen} = useContext(PreviewContext);
    const [show, setShow] = useState(false);

    const onChange = (value) => {
     };
 const {cat}= useParams( )
 const [match, setMatch]=useState(false)

     const Categoriesitems = useSelector(CatougriesSelector);
     const [item_old,setNewItem]=useState(item)

      const products = useSelector(cartItems)
    const dispatch = useDispatch();
    let mql = window.matchMedia('(max-width: 600px)');
     const addToCart = (e)=>{
        e.preventDefault()
dispatch(AddItemToCartFunc(item,products));
setOpen(false);
return message.success(`added ${item.name} to cart`)
    }
  //  const el_height =  ;
 
 
 

  const handleClose = () => setOpen(false);
  const handleShow = () => setShow(true);
const UpToNext_2 =()=>{
   Categoriesitems&&  Object.values(Categoriesitems).map(
    (items,idx)=>{
  items.map((item_e,index,array)=>{
 if(item_e.id===item_old.id){
   let next_index = index+1
   setNewItem(items[next_index])
  if(next_index   >= array.length)  setNewItem(array[0])  ;
}

})
  

})
}
const backToPrev =()=>{
   Categoriesitems&&  Object.values(Categoriesitems).map(
    (items,idx)=>{
  items.map((item_e,index,array)=>{
 if(item_e.id===item_old.id){
   let brev = index-1
   setNewItem(items[brev])
  if(brev   <= 0)  setNewItem(array[array.length-1])  ;
}

})
  

})
}
useEffect(()=>{

  setNewItem(item)


},[item])
useEffect(()=>{
 
  if(open){

 
      const element = document.getElementById('preview');

      if(element!==null){
        let initialX = null;
        let initialY = null;
        
        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchmove', handleTouchMove);
        
        function handleTouchStart(event) {
          const firstTouch = event.touches[0];
          initialX = firstTouch.clientX;
          initialY = firstTouch.clientY;
        }
        
        function handleTouchMove(event) {
          if (initialX === null || initialY === null) {
            return;
          }
        
          const currentX = event.touches[0].clientX;
          const currentY = event.touches[0].clientY;
        
          const diffX = initialX - currentX;
          const diffY = initialY - currentY;
          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
                 return backToPrev()
         
              } else {
             return UpToNext_2()
        
              }
          // } else {
          //   if (diffY > 0) {
          //     console.log('Swipe up');
          
          //   } else {
          //     console.log('Swipe down');
          
          //   }
          }
        
          initialX = null;
          initialY = null;
        
          
        }
        }
        
      }
  
     
  const image = document.querySelector("#i img")
  const image_2 = document.querySelector("#i2 img")
  console.log(image)
  console.log(image_2)

  if(image !==null ){
    image.crossOrigin = "Anonymous";


    image.onload = () => {
        const { R, G, B } = getAverageColor(image, 4)
    
        document.querySelector(".modal-body").style.background  = `linear-gradient(to left, rgb(${R}, ${G},${B}), #fff)  `
        // document.querySelector(".myof").style.background  = `linear-gradient(to left, rgb(${R}, ${G},${B}), #fff)  `
        // document.querySelector("#i").style['box-shadow'] = `rgb(${R}, ${G},${B}) 0px 8px 24px;`
    }

  
  }else if(image_2 !==null){
     image_2.crossOrigin = "Anonymous";


    image_2.onload = () => {
        const { R, G, B } = getAverageColor(image_2, 4)
    
         document.querySelector(".myof ,.mycanvasHeader ").style.background  = `linear-gradient(to bottom, rgb(${R}, ${G},${B}), #fff)  `
         // document.querySelector("#i").style['box-shadow'] = `rgb(${R}, ${G},${B}) 0px 8px 24px;`
    }
  }


},[item_old])


useEffect(()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
setMatch(true)
} else {
setMatch(false)
       
    }
  }
  
  const  x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);

},[])
     return (
     <>
     {
         match ?
         <>
  
   
       
   
         <Offcanvas id="preview"  style={{height:'100%'}} placement='bottom' show={open} 
          onHide={handleClose} responsive="lg">
          
           <Offcanvas.Body  className='myof' >
           <div className='d-flex canv_header'>
<div className="icon_small_canffas" onClick={handleClose}>
<i className="fa-solid fa-arrow-left"></i>
</div>

             <Offcanvas.Title className='i_m_n'>{item_old.name}</Offcanvas.Title>

<div className="icon_small_canffas">
<svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.312"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13H17C17.9428 13 18.4142 13 18.7071 13.2929C19 13.5858 19 14.0572 19 15V17C19 17.9428 19 18.4142 18.7071 18.7071C18.4142 19 17.9428 19 17 19H15C14.0572 19 13.5858 19 13.2929 18.7071C13 18.4142 13 17.9428 13 17V15Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 7C13 6.05719 13 5.58579 13.2929 5.29289C13.5858 5 14.0572 5 15 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V9C19 9.94281 19 10.4142 18.7071 10.7071C18.4142 11 17.9428 11 17 11H15C14.0572 11 13.5858 11 13.2929 10.7071C13 10.4142 13 9.94281 13 9V7Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5 15C5 14.0572 5 13.5858 5.29289 13.2929C5.58579 13 6.05719 13 7 13H9C9.94281 13 10.4142 13 10.7071 13.2929C11 13.5858 11 14.0572 11 15V17C11 17.9428 11 18.4142 10.7071 18.7071C10.4142 19 9.94281 19 9 19H7C6.05719 19 5.58579 19 5.29289 18.7071C5 18.4142 5 17.9428 5 17V15Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5 7C5 6.05719 5 5.58579 5.29289 5.29289C5.58579 5 6.05719 5 7 5H9C9.94281 5 10.4142 5 10.7071 5.29289C11 5.58579 11 6.05719 11 7V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11H7C6.05719 11 5.58579 11 5.29289 10.7071C5 10.4142 5 9.94281 5 9V7Z"
 stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></div>
            </div>



             <div className='item_name_image' id="i2">
<img className='canvasimage' src={item_old.imageUrl}/>

<div className='icon_position'>
<i className="fa-solid fa-magnifying-glass"></i>
</div>

             </div>


         <div className='wrapper_mo'>
              <div className="mt-6 revi">
                  <h4 className="sr-only r">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                     <div className="name_price">

          

 
</div>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                    <a href="#" className="ml-3 text-sm font-medium r text-indigo-600 hover:text-indigo-500">
                      {product.reviewCount} reviews
                    </a>


                  </div>
                </div>
<div className='d-flex m_cust'>

                      
<div className="pppp p_2">
    <div className="icon_w i_2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">

        </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#d9d9d9"></path></g></svg>    
        
        10
        </div>
        <div className="icon_w i_2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"
                 strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z" 
                    stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> 

                    20
                </div>
</div>
                    <div className="pppp">
        <div className="icon_w">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 12.5C7.5 6 16.5 6 19.5 12.5" stroke="#515c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16Z" stroke="#515c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>            15
        </div>
        people are wathching
    </div>
</div>
<section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                {/* <p className="text-2xl text-gray-900 id_price"><span>Total Price:</span>  {item_old.price} $</p> */}

            
              </section>


               <div className="av">


<p className='p'>Avalible Sizes</p>
    <fieldset className="picker">
<label  htmlFor="size-s">
<input type="radio" name="sizes" id="size-s"/>
<span>S</span>
</label>
<label  htmlFor="size-m">
<input type="radio" name="sizes" id="size-m"/>
<span>M</span>
</label>
<label  htmlFor="size-l">
<input type="radio" name="sizes" id="size-l"/>
<span>L</span>
</label>
<label  htmlFor="size-xl">
<input type="radio" name="sizes" id="size-xl"/>
<span>XL</span>
</label>
<label  htmlFor="size-xxl">
<input type="radio" name="sizes" id="size-xxl"/>
<span>XXL</span>
</label>
</fieldset>
 </div>
<div className='av'>
<p className="p">
Avalible Colors     

</p>
<div className="avalible_colors">
<ul className="product-color">
    <li>
      <input type="radio" name="color" id="red"/>
      <label htmlFor="red" style={{backgroundColor:'red'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#A2C2C9"/>
      <label htmlFor="#A2C2C9" style={{backgroundColor:'#A2C2C9'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#EFDBD4"/>
      <label htmlFor="#EFDBD4" style={{backgroundColor:'#EFDBD4' }}></label>
    </li>
    <li>
        <input type="radio" name="color" id="#00BCD4" checked="checked"/>
        <label htmlFor="#00BCD4" style={{backgroundColor:'#00BCD4'}}></label>
      </li>
    </ul>

</div>

</div>
         </div>
           </Offcanvas.Body>


           <div className='of_footer'>

           <div className='d-flex'>

 

<button
                    type="submit"
                    className="mt-6  preview_button flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
              
                    Add to bag
                    {item_old.price} $
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none"
                     stroke="#000"><g id="SVGRepo_bgCarrier" 
                     strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
                     strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="16 20 56 20 52 44 16 44 16 8 8 8"></polyline><circle cx="20" cy="52" r="4"></circle><circle cx="48" cy="52" r="4"></circle></g></svg>                 
                    
                     </button>


                     <div className="ic">

                     <i className="fa-regular fa-heart  "></i>  
                                        </div>
                                        <div className="ic">

                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                           </div>
</div>
   

            </div>
         </Offcanvas>
       </>
         

         :    <Modal show={open} 
             id='preview'
             size="lg"
             onHide={()=>setOpen(!open)}
             dialogClassName="modal-90w"
             >
             
             <Modal.Body>
       
                           <div className="row    
                           he_pre
                              ">

<div className="header_main">

    <div className="icon_s_2">
        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="#000000"> </path> </g></svg>
    <span>close</span>
            </div>


        </div>
            <div style={{height:'-webkit-fill-available',
            position:'relative',padding:'0px'}}
             className="col-md-5 aspect-w-2 aspect-h-3 
             overflow-hidden   
              sm:col-span-4 lg:col-span-5 image_p">
              <Image id='i' width={'100%'} height={'500px'} 
                style={{width:'100%',height:'100%'}} src={item_old.imageUrl} alt={product.imageAlt} className="object-cover object-center" />
            
   
            </div>
            <div className=" col sm:col-span-8 lg:col-span-7 info_pe">
     
              <div className='border_top_mobile'></div>
                  {/* Reviews */}
                  <div className="mt-6 revi">
                  <h4 className="sr-only r">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                     <div className="name_price">

          

 
</div>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                    <a href="#" className="ml-3 text-sm font-medium r text-indigo-600 hover:text-indigo-500">
                      {product.reviewCount} reviews
                    </a>
                    
<div className="pppp p_2">
    <div className="icon_w i_2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">

        </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#d9d9d9"></path></g></svg>    
        
        10
        </div>
        <div className="icon_w i_2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier"
                 strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z" 
                    stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path></g></svg> 

                    20
                </div>
</div>
                    <div className="pppp">
        <div className="icon_w">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 12.5C7.5 6 16.5 6 19.5 12.5" stroke="#515c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16Z" stroke="#515c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>            15
        </div>
        people are wathching
    </div>

                  </div>
                </div>
                

              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{item_old.name}</h2>
              <p className='pro_desc'>

Curabitur egestas malesuada volutpat.
 Nunc vel vestibulum odio, ac pellentesque lacus.
  Pellentesque dapibus nunc nec 
est imperdiet, a malesuada sem rutrum
</p>
              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-gray-900 id_price"><span>Total Price:</span>  {item_old.price} $</p>

            
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
           
 <div className="av">


<p className='p'>Avalible Sizes</p>
    <fieldset className="picker">
<label  htmlFor="size-s">
<input type="radio" name="sizes" id="size-s"/>
<span>S</span>
</label>
<label  htmlFor="size-m">
<input type="radio" name="sizes" id="size-m"/>
<span>M</span>
</label>
<label  htmlFor="size-l">
<input type="radio" name="sizes" id="size-l"/>
<span>L</span>
</label>
<label  htmlFor="size-xl">
<input type="radio" name="sizes" id="size-xl"/>
<span>XL</span>
</label>
<label  htmlFor="size-xxl">
<input type="radio" name="sizes" id="size-xxl"/>
<span>XXL</span>
</label>
</fieldset>
 </div>
<div className='av'>
<p className="p">
Avalible Colors     

</p>
<div className="avalible_colors">
<ul className="product-color">
    <li>
      <input type="radio" name="color" id="red"/>
      <label htmlFor="red" style={{backgroundColor:'red'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#A2C2C9"/>
      <label htmlFor="#A2C2C9" style={{backgroundColor:'#A2C2C9'}}></label>
    </li>
    <li>
      <input type="radio" name="color" id="#EFDBD4"/>
      <label htmlFor="#EFDBD4" style={{backgroundColor:'#EFDBD4' }}></label>
    </li>
    <li>
        <input type="radio" name="color" id="#00BCD4" checked="checked"/>
        <label htmlFor="#00BCD4" style={{backgroundColor:'#00BCD4'}}></label>
      </li>
    </ul>

</div>

</div>

<div className="av">
  <span>Quantity</span>
<InputNumber className='i_number' min={1} max={10} defaultValue={3} onChange={onChange} />

</div>

      
<div className='d-flex'>


<button
                    type="submit"
                    className="mt-6  preview_button flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><polyline points="16 20 56 20 52 44 16 44 16 8 8 8"></polyline><circle cx="20" cy="52" r="4"></circle><circle cx="48" cy="52" r="4"></circle></g></svg>                 
                    
                     </button>

                     <div className="ic">

                     <i className="fa-regular fa-heart  "></i>  
                                        </div>
                                        <div className="ic">

                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                           </div>
</div>
   
                     {/* <div className="header_main_right">


<div className="icon_w i_3" >


    <svg fill="#4b4949" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 475.881 475.881" xmlSpace="preserve" stroke="#4b4949"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M475.632,326.591L475.632,326.591l-62.1-240.9c-0.9-3.3-3.8-5.6-7.3-5.6c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0h-160.3 v-54.7c0-4.1-3.4-7.5-7.5-7.5c-4.1,0-7.5,3.4-7.5,7.5v54.7h-162.8c-0.1,0-0.2,0-0.3,0c-0.1,0-0.1,0-0.2,0c-3.4,0-6.4,2.4-7.2,5.7 l-59.7,240.9c-0.6,2.2,0,4.6,1.4,6.4c1.4,1.8,3.6,2.9,5.9,2.9h121.8c2.3,0,4.5-1.1,5.9-2.9c1.4-1.8,1.9-4.2,1.3-6.5l-59.6-231.4 h153.5v347.8h-51.8c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h118.7c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-51.8v-347.8h151.3 l-56.7,231.6c-0.5,2.2,0,4.6,1.4,6.4c1.4,1.8,3.6,2.9,5.9,2.9h121c2.3,0,4.5-1.1,5.9-2.9 C475.732,331.291,476.232,328.891,475.632,326.591z M119.632,320.991h-102.6l50.3-202.8L119.632,320.991z M356.932,320.991 l49.6-202.6l52.2,202.6H356.932z"></path> </g> </g> </g></svg>
   
compare with other product

</div>




</div> */}



  
{/*            
                <p className='p' style={{marginBottom:'0px'}}>share with</p>
                <Space size={[0, 8]}  className='tabs_conta'  >
<Tag icon={<TwitterOutlined />} color="#55acee">
Twitter
</Tag>

<Tag icon={<FacebookFilled />} color="#3b5999">
Facebook
</Tag>
<Tag icon={<WhatsAppOutlined />} color={'success'}>
Whatssapp
</Tag>
<Tag icon={<InstagramOutlined />} color={'danger'}>
Instgran
</Tag>

</Space> */}
              </section>
            </div>
          </div>
          <div className='next_ss'>

<button className="ne_pre"  onClick={()=>UpToNext_2()}>

<span>next</span>

<i className="fa-solid fa-arrow-right  "></i>
 </button>
 
 <button className="ne_pre" onClick={backToPrev}>

   <i className="fa-solid fa-arrow-left"></i>
<span>previous</span>
       </button>
</div>
             </Modal.Body>
       
           </Modal>

        
 
             
  
          
          }
   </>
    )
        }