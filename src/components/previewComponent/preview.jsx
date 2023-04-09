import { Fragment, useContext, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { DocumentMagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { PreviewContext } from '../../contexts/previewContext'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemToCartFunc } from '../../store/cart/cart.action'
import { cartItems } from '../../store/cart/cart.selector'
import { Divider, Image, InputNumber, Space, Tag, message } from 'antd';
 
import { Modal,Drawer } from 'antd'
import DrawerComponent from '../customs/drawer/drawer'
import { DraweerComponent } from './preview.styles';
import './preview.scss';
import { AndroidOutlined, AppleOutlined, CommentOutlined, FacebookFilled, InstagramOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Tab, Tabs } from 'react-bootstrap'
 
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
      console.log('changed', value);
    };
     const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
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
  //  console.log(el_height)
    return (
     <>
    
 


 

          {/* <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
  
                    <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img width={'100%'} height={'100%'} src={item.imageUrl} alt={item.name} className="object-cover object-center" />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12"></h2>
  
                    
                      </div>
                    </div>
                  </div>
          
            </div>
          </div> */}
          
          {
            
                   <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-w-full items-stretch justify-center text-center md:items-center   " 
          
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 
              md:max-w-2xl md:px-4 lg:max-w-6xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white
                 px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div style={{height:'-webkit-fill-available',position:'relative'}} className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <Image width={'100%'} height={'100%'}   style={{width:'100%',height:'100%'}} src={item.imageUrl} alt={product.imageAlt} className="object-cover object-center" />
                   
                   <div className='image_header_preview'>
               Add To Wish List    <i className="fa-solid fa-heart"></i>         <i className="fa-regular fa-bookmark"></i>
                             </div>
           
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                            <Tag color="#87d068">#new</Tag>
                            <div class="name_price">

                  

     <div class="d-flex">

     
         
        <div class="see_numbers">
            115
            <br/>

            <i  className="fa-regular fa-eye"></i>
         </div>
       
    </div>
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
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>
                        <div class="cart_name">
                <div class="name_price">

                  
                <i className="fa-regular fa-bookmark"></i>
                     <div class="d-flex">

                        <div class="see_numbers">
                            0
                         
 
                          </div>
                        <div class="see_numbers"> 

                            0
 
                            <i className="fa-regular fa-comment"></i>
                         </div>
                        <div class="see_numbers">
                            115
                            <br/>
 
                            <i  className="fa-regular fa-eye"></i>
                         </div>
                       
                    </div>
                </div>

             
            </div>
            <Divider/>

    <p className='p'>Avalible Sizes</p>
            <fieldset class="picker">
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
            <Divider/>
            <div className='product_add'>
           <InputNumber className='i_number' min={1} max={10} defaultValue={3} onChange={onChange} />

            <button
                            type="submit"
                            className="mt-6  preview_button flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
            </div>
            <Divider/>
            <Tabs
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
    </Tabs>
           
                        <form>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                        
                          </div>

                          {/* Sizes */}
                          <div className="mt-10">
                             

                         
                          </div>

                         
                        </form>
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
             
           

        
 
             
  
          
          }
   </>
    )
}