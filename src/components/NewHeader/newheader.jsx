import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassCircleIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { DropDown } from '../customs/notificationComponent/dropDown'
import{ReactComponent as WishList} from '../../assets/wishList.svg'
import { useDispatch, useSelector } from 'react-redux'
import {userSelectMemo} from '../../store/user/user.selector'
import DrawerComponent from '../customs/drawer/drawer'
import WishListContainer from '../wishList.components/wishlist.component'
import ShoppingCart from '../customs/cart/shoppingCart'
import { DropDownComponent } from 
'../addToCart/addToCard_DropDownComponent/addToCart_dropDown.component'
import { useContext } from 'react'
import { WishListContext } from '../../contexts/wishList';
import  * as Set  from '../../store/cart/cart.action';
import {  CartOpen, totalCart,totalPaid } from '../../store/cart/cart.selector';
import * as styles from './newHeder.styles'
import { CatougriesSelector } from '../../store/categories/category.selector'
import { handleRouteGuide } from '../../componentsutlts/handleRouteGuide'
import { PreviewComponent } from '../previewComponent/preview'
import { BackTop, Button, FloatButton, Tooltip } from 'antd'
import { ContactIcon
 } from '../contactUs/contactus.icon'
import { Input } from 'antd';
import ToolTip from '../customs/AntToolTip/ToolTip';
import './newheader.styles.scss'
import SignIn from '../login/signIn/sign-in.component';
import {searchContext} from '../../contexts/searchContext'
import SearchDrawer from '../SearchDrawerComponent/Search.Drawer.component'
import { cartItems } from '../../store/cart/cart.selector'

    const navigation = {

  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
           
          ],
        },
       
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [ ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
     
      ],
    },
  ],
  pages: [
    { name: 'home', href: '/' },
    { name: 'Stores', href: '/shop' },
    { name: 'mens', href: '/shop/mens' },
    { name: 'Wommans', href: '/shop/womens' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NEWlyHeader() {
  const { Search } = Input;
  const [searchValue,SetSearchValue]=useState('');
  const {setSearch,openS,SetSearchOpen} = useContext(searchContext);
  const cart = useSelector(cartItems)
  const quantity = useSelector(totalCart);
  const total = useSelector(totalPaid)
  const searchStart = (e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)

    }
const [modalShow, setModalShow] = useState(false);

  const mediaQuery = window.matchMedia('(min-width: 1000px)');
  const mediaQuery2 = window.matchMedia('(max-width: 768px)');
  let zIndex= 0;
  const navigate = useNavigate()
  if(mediaQuery.matches){
    zIndex=1000
  } else{
    zIndex=0

  }
  if(mediaQuery2.matches){
    zIndex=0

  }else{
    zIndex=1000

  }
  const categoriesItems = useSelector(CatougriesSelector);
  const location =useNavigate();

if(Object.keys(categoriesItems).length!==0){
  const wommans=[];
  const menFeture=[]
  const wommanFeture=[]
  const mens=[];
  Object.keys(categoriesItems).map(item=>{
  if( item==='womens'){
     wommanFeture.push(...categoriesItems['womens'])
     wommans.push(categoriesItems['womens'])
  } 
  if(item==='mens'){
    menFeture.push(...categoriesItems['mens'])

    mens.push(categoriesItems['mens'])
}
  return  
  });

  navigation['categories'].find(cat=>{
    
    if(cat.id==='men'){
      cat.featured=[...menFeture];
     cat.sections[0].items=[...mens[0]]
    }
    if(cat.id==='women'){
      cat.featured=[...wommanFeture];

      cat.sections[0].items=[...wommans[0]]
    }
  
  });
 

}
//scroll Event
window.onscroll = function() {return First()};

function First() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main_navigation").classList.add('p_fixed');
  } else {
    document.getElementById("main_navigation").classList.remove('p_fixed');
  }
}
//scroll Event
    //usersetOpen
 const currentUser = useSelector(userSelectMemo);
    //showDrawerWishList;
    const {isOpen,setIsOpen}= useContext(WishListContext)
  const openDrawer = ()=>{
    SetSearchOpen(!openS);
    console.log(openS);
  }
    const showDrawer = () => {
        setIsOpen(!isOpen);
    };
    //cart
    const totalcart = useSelector(totalCart);
    const opening = useSelector(CartOpen);
    const dispatch = useDispatch()
    const HandleDropDown = ()=>{
        dispatch( Set.setOpen(!opening))
    
    }
  const [open, setOpenNav] = useState(false);
   const HandleItemRoute= (name)=>{
          handleRouteGuide(categoriesItems,location,name);
         setOpenNav(false);
       }
  const totalcartItems=()=>{
    if(cart.length>0){
      
      const { cart:{total,quantity}} = currentUser.cart;

      return quantity
    }
    return totalcart
  }
  return (
    <>

 
 
 
  
    <div  style={{background:'#fff'}}   >
      {/* Mobile menu */}
       <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-1000  " onClose={()=>setOpenNav(false)}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <styles.Panal className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpenNav(false)}
                  >
                    <span className="sr-only" onClose={()=>HandleDropDown}>Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group   as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.filter((i,idx) =>idx<2).map(({imageUrl,name}) => (
                            <div key={name} className="group relative text-sm">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={`${imageUrl}`} alt={name} className="object-cover object-center" />
                               </div>
                              <p onClick={HandleItemRoute.bind(null,name)}
                               className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {name}
                              </p>
                              <Link  to={'/shop'} aria-hidden="true" className="mt-1">
                                Shop now
                              </Link>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} 
                            className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p  onClick={HandleItemRoute.bind(null,item.name)}
                                   style={{cursor:'pointer'}}className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={`${page.href}`} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link> 
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4  only_s">
                {  currentUser!==null?(<></> ):
( 
  <>
                  <div className="flow-root">
                    <Link to="sign/signIn" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to="sign/signUp" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </Link>
                  </div>
  </>

)}
                </div>

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </styles.Panal>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <styles.HeaderComponent  className="relative fixed" >
       

        <nav aria-label="bottom" className="px-4 sm:px-6 lg:px-8  ">
          <div className=" ">
            <div className="flex h-16 items-center only_m">
          

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link  to='/'>
                  <span className="sr-only">Your Company</span>
                
                </Link>
              </div>
           
              {/* Flyout menus */}
              {/* {pc} */}

            
            </div>
          </div>
              <div className='secxond_nav'  id='main_navigation'>
                
              <button
                type="button"
                id='categore'
                className="rounded-md bg-white p-2 text-gray-400 "
                onClick={() => setOpenNav(true)}
              >
           
                <div className="hamburger">
    <div className="hamburger__container">
      <div className="hamburger__inner"></div>
      <div className="hamburger__hidden"></div>
    </div>
  </div>
                <span className="sr-only">Open menu</span>
                
                
              </button>
                <span className="cat_s  ">ME</span>
                <span className="cat_m  ">ME</span>
                   {/* searchbar */}
              {/* <Search   
              style={{background:'#ddd',border:'1px solid #ddd',borderRadius:'10px'}}
              onClick={()=>navigate('/search')}
              
              
              size="large" loading={false} /> */}
             
             <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ms-auto me-auto">
  <styles.wrapperIndex className="flex h-full space-x-8">
    {navigation.categories.map((category) => (
      <Popover key={category.name} className="flex">

        {({open}) => (
          <>
            <div className="relative flex d-sm-none">
              <Popover.Button
              
                  className={
                  classNames(
                    open
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:text-gray-800',
                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                )}
              >
                {category.name}
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              
              <Popover.Panel  className="absolute inset-x-0 top-full text-sm text-gray-500">
                {/* Presentational element used to render the bottom shadow, 
                if we put the shadow on the actual panel it pokes out the top, so 
                we use this shorter element to hide the top of the shadow */}
                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                        {category.featured.filter((i,idx) =>idx<2).map(({imageUrl,name})=>(
                          <div key={name} className="group style={{'z-index':1000}} relative text-base sm:text-sm">
                          <div  className="aspect-w-1 aspect-h-1 
                            overflow-hidden rounded-lg bg-gray-100 
                            group-hover:opacity-75">
                              <img
                                src={imageUrl}
                                alt={name}
                                className="object-cover object-center"
                              />
                            </div>
                              <p onClick={()=>{
                                HandleItemRoute(name)
                             } }
                               className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              {name}
                            </p>
                            <Link to={'/shop'} aria-hidden="true" className="mt-1">
                              Shop now
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${section.name}-heading`}
                              className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${section.name}-heading`}
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flex">
                                  <p onClick={HandleItemRoute.bind(null,item.name)} 
                                   style={{cursor:'pointer'}} className="hover:text-gray-800">
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm link
                       font-medium 
                      text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
              
                </styles.wrapperIndex>
              </Popover.Group>
              <div className="ml-auto flex items-center search">
            
            <DropDown user={currentUser}  position={'bottomRight'} className="mb-2"  />
            
              {  currentUser!==null?(<></> ):
(   <div className="z_1 create_account lg:flex lg:flex-1 lg:items-center 
lg:justify-end lg:space-x-6">
<div className="flow-root">
                  <Link to="sign/signIn" className="-m-2 block p-2 font-medium text-gray-900">
                    Sign in
                  </Link>
                </div>
                <div className="flow-root">
                  <Link to="sign/signUp" className="-m-2 block p-2 font-medium text-gray-900">
                    Create account
                  </Link>
                </div>
</div>
  

  )}
     

           

         
            </div>  
                      {/* <input className="form-control me-2" 
                      placeholder="search products"
                      onChange={searchStart} 
                      type="search"
                      onClick={openDrawer}
                      value=''
                      style={{
                        background:'#dddddd47',
                      border:'1px solid #ddd',
                      width:'62%',marginLeft:'auto'}}
                       aria-label="Search"/> */}
<button className="se"   onClick={openDrawer}>
<i className="fa-solid fa-magnifying-glass"
                    
 
 ></i>search
</button>
              {/* searchbar */}
  {/* <div    className="ms-2  d-sm-none" >

                <DropDown  user={currentUser} id='current_sm'
                />
                  </div> */}
            
              <div className='cart'>
              <WishList className="ms-2 me-2" 
    style={{width:'30px',cursor:'pointer',margin:'0px 10px'}}
    onClick={showDrawer}
    />

                     {/* Cart */}
                     <div className="ml-4 flow-root lg:ml-6 ms-4" style={{marginRight:'30px'}}>
                  <p   className="group -m-2 flex items-center p-2" onClick={HandleDropDown}>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {quantity}</span>
                    <ShoppingBagIcon    
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Bag
                
                    <span className="sr-only">items in cart, view bag</span>
                  </p>
                </div>
              </div>
              </div>
        </nav>
 
        <styles.MobileNav className='buttom lg:hidden d-md-none    '>
     <Link to={'/'}>

              <i className="fa-solid fa-house-chimney" style={{color:'#6767dd'}}></i>
     </Link>

 

                
                <span className="sr-only">items in cart, view bag</span>

                
      
                   {/* Cart */}
                   {/* Cart */}
                   <div className="ml-4 flow-root lg:ml-6 ms-4" style={{marginRight:'30px'}}>
                  <p   className="group -m-2 flex items-center p-2" onClick={HandleDropDown}>
              
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {quantity}</span>
                  </p>
                </div>
                <WishList className="ms-2 me-2" 
    style={{width:'30px',cursor:'pointer',margin:'0px 10px'}}
    onClick={showDrawer}
    />


              

    
     
         </styles.MobileNav >
      </styles.HeaderComponent>
    
     <FloatButton.BackTop style={{marginBottom:'100px'}}/>

      <DrawerComponent >
    <WishListContainer/>
   </DrawerComponent>
   <ShoppingCart>
    <DropDownComponent/>
    </ShoppingCart>
    </div>
    <PreviewComponent/>
    
  <SearchDrawer/>
    <Outlet/>
    </>
  )
}