import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import './storeModule.scss'
import { ExpandAltOutlined } from '@ant-design/icons';
import grid_1 from '../../assets/icons_grid/grid-2-h-svgrepo-com.svg'
import grid_3 from '../../assets/icons_grid/grid-2-vertical-svgrepo-com.svg'
import grid_2 from '../../assets/icons_grid/grid-aspect-ratio-svgrepo-com (2).svg'
import OwlCarouselComponent from '../customs/owlCarousel/owlCarousel'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
  const   options = {
    margin: 3,
   responsiveClass: true,
   nav: true,
   dots: true,
  
    smartSpeed: 1000,
    merge:true,
 margin:10,
   

   responsive: {
       0: {
           items: 1,
           stagePadding:25
       },
       400: {
           items:1,
           stagePadding:25,

    margin: 2,

       },
       600: {
           items: 1,
           stagePadding:25

       },
       700: {
           items: 1,
          //  stagePadding:25

       },
       1000:{
          items:3,
    // stagePadding:100

       },
       1500: {
           items: 1,
 
       }
   },
   678:{
    mergeFit:true
},
1000:{
    mergeFit:false
    ,

}
}
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export const StoreModule =()=>{
  

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return(

        <>
 

            <div className="bg-white">
    
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-8xl    px-2">
          <div className="flex items-baseline justify-between     " style={{height:'60px'}}>

                <img src="https://th.bing.com/th/id/OIG.Z8qNOhAZ38VDcSaHf6_3?pid=ImgGn" width={'60px'} className='logo_store'/ >
<div className='search_bar_form'>
    <label htmlFor="search">
    <i class="fa-solid fa-magnifying-glass text-gray"></i>
    </label>
    <input type="text" placeholder='search' id='search' />
</div>
            <div className="flex items-center">
            
{/* Profile dropdown */}
<Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <i class="fa-regular fa-bookmark"></i>

              </button>
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <i class="fa-solid fa-bag-shopping"></i>

              </button>
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <i class="fa-regular fa-heart" style={{color:'gray !important'}}></i>
                              </button>
           
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-1">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex all_page ">
              {/* Filters */}
              <form className="hidden lg:block">
            {/* <h4 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h4> */}

              {/* <p className='filter_head'> filters 
              <FunnelIcon className="h-5 w-5"   />
              
              </p> */}
              <p className='filter_head_2'>
              <i class="fa-solid fa-house"></i> Home
              </p>
              <p className='filter_head_2'>
              <i class="fa-solid fa-user"></i>Profile
              </p>
              <p className='filter_head_2'>
              <i class="fa-solid fa-clock-rotate-left"></i>History
              </p>
              <p className='filter_head_2' style={{display:'flex',justifyContent:'space-between'}}>

              <p className='filter_head_number'>
              <i class="fa-solid fa-cart-shopping"></i>
              Your Cart  
              </p>
              <p>5</p>
              </p>

              {/* <p>categories</p>
             <ul>
                
<li className='filter_head'>
    hats <p className="numbers">
        5
    </p>
</li>
<li className='filter_head'>
    hats <p className="numbers">
        5
    </p>
</li>
<li className='filter_head'>
    hats <p className="numbers">
        5
    </p>
</li>
<li className='filter_head'>
    hats <p className="numbers">
        5
    </p>
</li>

                </ul> */}
                <p  className='filter_head_2'><i class="fa-solid fa-filter"></i> filters</p>
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  
                    <li  className='categories'>
                      <a  ></a>
                    </li>
                 
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 centerlize">
            
              <div className='main_image'
               style={{background:`url(${'https://cdn.shopify.com/s/files/1/0112/6468/8186/files/slider-1_1512x.jpg?v=1663991033'})`
               ,position:'relative'
               }}>
                <div className="image-overlay"></div>
                <h1 className='Main_image_text'>Shop All Collection of mens</h1>

</div> 
  <div className='tabs'>
    <ul className='tab_inner'>
        <li className='tab_inner_value'>Hats</li>
        <li className='tab_inner_value'>sneakers</li>
        <li className='tab_inner_value'>Mens</li>
        <li className='tab_inner_value'>Wommans</li>
        <li className='tab_inner_value'>Boys</li>
    </ul>
    <Menu as="div" className="relative inline-block text-left">
                <div>
                  
                  <Menu.Button className="  inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <i className="fa-solid fa-sort i_icon"></i>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right 
                  rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
   <button type="button" className="  ml-1 p-2 text-gray-400 hover:text-gray-500 ">
                <span className="sr-only">View grid</span>
                <ExpandAltOutlined  className='i_icon'/>

              </button>
              <div className='buttons_contaner'>
              <button type="button" className="mr-4   p-2 text-gray-400 hover:text-gray-500   ">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button"  >
                <span className="sr-only">View grid</span>
 
 <img src={grid_3}   className='grid_icon' alt="" srcset="" />
               </button>
              <button type="button"  >
                <span className="sr-only">View grid</span>
 
 <img src={grid_2}  className='grid_icon' alt="" srcset="" />
               </button>
              <button type="button"  >
                <span className="sr-only">View grid</span>
 
 <img src={grid_1}   className='grid_icon' alt="" srcset="" />
               </button>
              </div>
           
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
</div>  
 <div className='best_product'>
  <h3>Best Products</h3>
  <div className='best_container'>

    <div className='new_item  '>
    <div className='new_item_image' style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/153_360x.jpg?v=1664962967)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
      {/* <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div> */}
 
    </div>
    </div>
    <div className='new_item  '>
    <div className='new_item_image' style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/T-Shirt-1_360x.jpg?v=1665395583)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
      {/* <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div> */}
 
    </div>
    </div>
    <div className='new_item  '>
    <div className='new_item_image' style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/184_0b13b867-958d-4eec-b61f-3c3a098288ac_360x.jpg?v=1665549524)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
      {/* <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div> */}
 
    </div>
    </div>
    <div className='new_item  '>
    <div className='new_item_image' 
    style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/201_8f0ef5a5-9a26-4660-8392-6a264237addd_180x.jpg?v=1665549361)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
      {/* <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div> */}
 
    </div>
    </div>
    <div className='new_item  '>
    <div className='new_item_image'
     style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/147_360x.jpg?v=1664962652)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
        
      {/* <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div> */}
 
    </div>
    </div>
  </div>
  </div>
<div className='row'>
  <div className='new_item col-md-3'>
    <div className='new_item_image' style={{backgroundImage:'url(https://cdn.shopify.com/s/files/1/0112/6468/8186/products/184_0b13b867-958d-4eec-b61f-3c3a098288ac_360x.jpg?v=1665549524)'}}>
        <p className='product_name'> Chollie Halool 
        <i class="fa-solid fa-bookmark"></i>
        </p>
      <div className='rating_name'>
          <button className='cart_button_new'>add To Cart <p className="button_price"> 25$</p></button>
        <p className='item_rating'>
          4 <i class="fa-solid fa-star"></i>
        </p>
      </div>
      <div className="image-overlay"></div>

    </div>
    <div className='p_end'>

    <div className='rev'>
 
      <p className='rev_inner'><i class="fa-regular fa-heart"></i> 250 <p>loves</p> </p>
      <p className='rev_inner'><i class="fa-regular fa-message"></i>250 <p>review</p> </p>


    </div>


 <i class="fa-solid fa-ellipsis"></i>
    </div>
  </div>
 </div>

                </div>
            </div>
          </section>
        </main>
      </div>
    </div>

        </>
    )
}