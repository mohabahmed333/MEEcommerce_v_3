import {   useContext, useState } from 'react'
  import { StarIcon } from '@heroicons/react/20/solid'
import { PreviewContext } from '../../contexts/previewContext'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemToCartFunc } from '../../store/cart/cart.action'
import { cartItems } from '../../store/cart/cart.selector'
import { Divider, Image, InputNumber, Space, Tag, message } from 'antd';
 
  import './preview.scss';
import {  FacebookFilled, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
 import Modal from 'react-bootstrap/Modal';

 
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
    const onChange = (value) => {
     };
    
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
     return (
     <>
    
 


 
 
          
          {
            
       
             
             <Modal show={open} 
             size="lg"
             onHide={()=>setOpen(!open)}>
             <Modal.Header closeButton>
              </Modal.Header>
             <Modal.Body>
              <div className='let-right-buttons'>
<button>
<i class="fa-solid fa-chevron-left"></i>  </button>
  <button>
  <i class="fa-solid fa-chevron-right"></i>
  </button>
                </div>
                           <div className="row w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div style={{height:'-webkit-fill-available',position:'relative'}}
             className="col-md-5 aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <Image width={'100%'} height={'500px'}   style={{width:'100%',height:'100%'}} src={item.imageUrl} alt={product.imageAlt} className="object-cover object-center" />
           
           <div className='image_header_preview'>
      <i className="fa-solid fa-heart"></i>         <i className="fa-regular fa-bookmark"></i>
                     </div>
   
            </div>
            <div className=" col sm:col-span-8 lg:col-span-7 info_pe">
                  {/* Reviews */}
                  <div className="mt-6 revi">
                  <h4 className="sr-only">Reviews</h4>
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
                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{item.name}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-gray-900 id_price">{item.price} $</p>
<p className='pro_desc'>

Curabitur egestas malesuada volutpat.
 Nunc vel vestibulum odio, ac pellentesque lacus.
  Pellentesque dapibus nunc nec 
est imperdiet, a malesuada sem rutrum
</p>
            
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
                <div className="cart_name">
        <div className="name_price">

          
        <i className="fa-regular fa-bookmark"></i>
             <div className="d-flex">

                <div className="see_numbers">
                    0
                 

                  </div>
                <div className="see_numbers"> 

                    0

                    <i className="fa-regular fa-comment"></i>
                 </div>
                <div className="see_numbers">
                    115
                    <br/>

                    <i  className="fa-regular fa-eye"></i>
                 </div>
               
            </div>
        </div>

     
    </div>
 
<p className='p'>Avalible Sizes</p>
    <fieldset className="picker">
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
     <div className='product_add'>
   <InputNumber className='i_number' min={1} max={10} defaultValue={3} onChange={onChange} />

    <button
                    type="submit"
                    className="mt-6  preview_button flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
    </div>
     {/* <Tabs
defaultActiveKey="home"
id="uncontrolled-tab-example"
className="mb-3"
>
<Tab className='tab' eventKey="home" title="Description">
<p className='p'>Description</p>
    <div className='disc'>
      <p>Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Molestias veniam hic rerum,
         repellat exercitationem cupiditate ex, possimus aspernatur consectetur nihil alias optio eligendi doloremque necessitatibus. Fugiat delectus odit at! Necessitatibus?</p>

    </div>
</Tab>
<Tab   className='tab' eventKey="profile" title="Comments">
</Tab>
<Tab  className='tab' eventKey="contact" title="Contact"  >
</Tab>
</Tabs> */}
   
           
                <p className='p'>share with</p>
                <Space size={[0, 8]} wrap>
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

</Space>
              </section>
            </div>
          </div>

             </Modal.Body>
           
           </Modal>

        
 
             
  
          
          }
   </>
    )
}