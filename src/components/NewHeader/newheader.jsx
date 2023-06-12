import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { DropDown } from '../customs/notificationComponent/dropDown'
import {ReactComponent as WishList} from '../../assets/wishList.svg'
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
import {   FloatButton    } from 'antd'
import   stores  from '../../assets/icons_grid/store-svgrepo-com.svg';
import { Input } from 'antd';
 import './newheader.styles.scss'
 import {searchContext} from '../../contexts/searchContext'
import SearchDrawer from '../SearchDrawerComponent/Search.Drawer.component'
import { cartItems } from '../../store/cart/cart.selector'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'

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
        <Dialog as="div" className="relative   " onClose={()=>setOpenNav(false)}>
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

          <div className="fixed inset-0 z-40 flex" style={{zIndex:1000}}> 
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
                <div className="flex    ">
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
       

        <nav aria-label="bottom" className="  sm:px-6    ">
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
                <div className='search___bar' onClick={openDrawer}>

<span>
  search
</span>
<svg  className="se se_mobile"  width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="28" cy="28" r="20"></circle><line x1="56" y1="56" x2="42.14" y2="42.14"></line></g></svg>
                </div>
            
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
     
     <Dropdown as={ButtonGroup} className='position-relative' id='notification'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       <i className="fa-regular fa-bell"></i>
       </Dropdown.Toggle>
 
      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-3">
          <span className='tag_new'>#   new</span>
          New Sipe has been released  in Mobile 
        when you click on item to prevew just swipe 
        right and left for the next and previous Product 

        <span className='tag_new' style={{marginLeft:'auto'}}>What's Next!</span>


        </Dropdown.Item>
      </Dropdown.Menu>
      <span className="position-absolute top-0 start-100
       translate-middle badge rounded-pill bg-primary">
    1
    <span className="visually-hidden">unread messages</span>
  </span>
    </Dropdown>
           

         
            </div>  
                  
{/* <button className="se se_mobile"   onClick={openDrawer}>
<i className="fa-solid fa-magnifying-glass"
                    
 
 ></i>
  <span className='search_h'> search</span>
</button> */}

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
        <div className="d-flex m_nav">
        <button className="menu_button" >
        <svg width="183px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080" strokeWidth="0.00048000000000000007"><g id="SVGRepo_bgCarrier" 
        strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="home"> <g id="home_2"> <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M43.47 24.6069C44.2064 23.4083 44.0527 21.8564 42.9778 20.8436L26.0229 4.81864C24.8648 3.72658 23.0592 3.72658 21.9019 4.81786L4.94313 20.8446C2.97172 22.708 4.29142 26.0254 7.00399 26.0254H9.92499V41.0066C9.92499 42.6643 11.2682 44.0066 12.925 44.0066H34.999C36.6558 44.0066 37.999 42.6643 37.999 41.0066V22.9566C37.999 21.2989 36.6558 19.9566 34.999 19.9566H12.925C11.2682 19.9566 9.92499 21.2989 9.92499 22.9566V24.0254H7.00399C6.10051 24.0254 5.66029 22.9188 6.3169 22.2981L23.2748 6.2722C23.6608 5.90822 24.2632 5.90822 24.6499 6.27293L41.6051 22.2982C41.9643 22.6366 42.0184 23.1301 41.778 23.5399C41.7741 23.5458 41.7704 23.5518 41.7667 23.5578C41.5852 23.8521 41.2883 24.0248 40.9198 24.0248C40.3675 24.0248 39.9198 24.4725 39.9198 25.0248C39.9198 25.5771 40.3675 26.0248 40.9198 26.0248C41.9825 26.0248 42.9064 25.495 43.4482 24.6409C43.4557 24.6297 43.463 24.6184 43.47 24.6069ZM11.925 41.0066V26.0254H23.836C24.3883 26.0254 24.836 25.5777 24.836 25.0254C24.836 24.4731 24.3883 24.0254 23.836 24.0254H11.925V22.9566C11.925 22.4037 12.3724 21.9566 12.925 21.9566H34.999C35.5515 21.9566 35.999 22.4037 35.999 22.9566V41.0066C35.999 41.5595 35.5515 42.0066 34.999 42.0066H12.925C12.3724 42.0066 11.925 41.5595 11.925 41.0066Z" fill="#808080"></path> </g> </g> </g></svg>        </button>
        <button className="menu_button"     onClick={() => setOpenNav(true)}>

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15C13 14.0572 13 13.5858 13.2929 13.2929C13.5858 13 14.0572 13 15 13H17C17.9428 13 18.4142 13 18.7071 13.2929C19 13.5858 19 14.0572 19 15V17C19 17.9428 19 18.4142 18.7071 18.7071C18.4142 19 17.9428 19 17 19H15C14.0572 19 13.5858 19 13.2929 18.7071C13 18.4142 13 17.9428 13 17V15Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 7C13 6.05719 13 5.58579 13.2929 5.29289C13.5858 5 14.0572 5 15 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V9C19 9.94281 19 10.4142 18.7071 10.7071C18.4142 11 17.9428 11 17 11H15C14.0572 11 13.5858 11 13.2929 10.7071C13 10.4142 13 9.94281 13 9V7Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5 15C5 14.0572 5 13.5858 5.29289 13.2929C5.58579 13 6.05719 13 7 13H9C9.94281 13 10.4142 13 10.7071 13.2929C11 13.5858 11 14.0572 11 15V17C11 17.9428 11 18.4142 10.7071 18.7071C10.4142 19 9.94281 19 9 19H7C6.05719 19 5.58579 19 5.29289 18.7071C5 18.4142 5 17.9428 5 17V15Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5 7C5 6.05719 5 5.58579 5.29289 5.29289C5.58579 5 6.05719 5 7 5H9C9.94281 5 10.4142 5 10.7071 5.29289C11 5.58579 11 6.05719 11 7V9C11 9.94281 11 10.4142 10.7071 10.7071C10.4142 11 9.94281 11 9 11H7C6.05719 11 5.58579 11 5.29289 10.7071C5 10.4142 5 9.94281 5 9V7Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>
        <button className="menu_button activated">
        <svg viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
         strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier" fill='none'strokeLinecap='rounded' stroke='rgba(0, 0, 0, 0.5490196078)  '
         
         > <defs> 

         
        </defs> <path id="c" className="d" d="m40.5,5.5H7.5c-1.1046,0-2,.8954-2,2v33c0,1.1046.8954,2,2,2h33c1.1046,0,2-.8954,2-2V7.5c0-1.1046-.8954-2-2-2Z"></path> <g> <path className="d" d="m27.1963,22.2612c-1.1867-.1754-2.265.4561-2.265,2.2015v.4137c0,1.4892,1.2072,2.6964,2.6964,2.6964h0c1.4892,0,2.6964-1.2072,2.6964-2.6964v-1.7527c0-1.4892-1.2072-2.6964-2.6964-2.6964-1.2819,0-1.8008.2714-2.5158,1.0494"></path> <g> <line className="d" x1="17.2285" y1="16.7871" x2="17.2285" y2="27.5728"></line> <path className="d" d="m17.2285,23.1237c0-1.4892,1.2072-2.6964,2.6964-2.6964h0c1.4892,0,2.6964,1.2072,2.6964,2.6964v4.4491"></path> </g> <path className="d" d="m10.3361,26.9699c.4923.4134,1.0239.6029,2.2176.6029h.6049c.9845,0,1.7825-.7998,1.7825-1.7864h0c0-.9866-.7981-1.7864-1.7825-1.7864h-1.2099c-.9845,0-1.7825-.7998-1.7825-1.7864h0c0-.9866.7981-1.7864,1.7825-1.7864h.6049c1.1937,0,1.7253.1894,2.2176.6029"></path> <g> <path className="d" d="m32.4409,24.8763c0,1.4892,1.2072,2.6964,2.6964,2.6964h0c1.4892,0,2.6964-1.2072,2.6964-2.6964v-1.7527c0-1.4892-1.2072-2.6964-2.6964-2.6964h0c-1.4892,0-2.6964,1.2072-2.6964,2.6964"></path> <line className="d" x1="32.4409" y1="20.4272" x2="32.4409" y2="31.2129"></line> </g> </g> </g></svg>

        </button>
        
        
    
        <button className="menu_button" onClick={HandleDropDown}>

<svg fill="#808080" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
<g> <path d="M28.462,49.718c-1.202,0-2.322-0.447-3.151-1.26c-1.051-1.028-1.5-2.594-1.172-4.087c0.311-1.416,1.245-2.498,2.563-2.968 c1.803-0.643,3.784-0.14,4.983,1.234c0.852,0.977,1.237,2.295,1.057,3.618C32.467,48.262,30.667,49.718,28.462,49.718z M28.326,43.117c-0.314,0-0.635,0.057-0.952,0.17c-0.896,0.32-1.188,1.085-1.282,1.513c-0.181,0.825,0.056,1.679,0.617,2.229 c0.454,0.445,1.077,0.689,1.753,0.689c1.024,0,2.143-0.596,2.298-1.734c0.104-0.761-0.103-1.483-0.581-2.032 C29.715,43.421,29.04,43.117,28.326,43.117z"></path> </g> 
<g> <path d="M41.669,49.718c-1.203,0-2.322-0.447-3.152-1.26c-1.051-1.029-1.5-2.595-1.172-4.087c0.311-1.416,1.245-2.498,2.563-2.968 c1.802-0.644,3.783-0.14,4.983,1.234c0.853,0.977,1.237,2.295,1.057,3.618C45.673,48.262,43.874,49.718,41.669,49.718z M41.532,43.117c-0.314,0-0.635,0.057-0.952,0.17c-0.896,0.32-1.188,1.085-1.282,1.513c-0.181,0.825,0.056,1.679,0.617,2.229 c0.454,0.445,1.077,0.689,1.754,0.689c1.023,0,2.142-0.596,2.297-1.734c0.104-0.761-0.103-1.483-0.581-2.032 C42.921,43.421,42.246,43.117,41.532,43.117z"></path> </g> <g> <path d="M37.921,39.828c-1.068,0-2.127-0.026-3.093-0.05l-1.418-0.029c-2.82-0.038-7.541-0.102-9.318-2.541 c-0.916-1.261-1.626-3.712-1.81-6.247c-0.092-1.257-0.122-2.609-0.15-3.917c-0.105-4.737-0.215-9.636-3.169-10.481 c-1.206-0.344-2.195-0.3-3.688-0.236l-0.246,0.011c-0.533,0.025-1.019-0.404-1.042-0.957c-0.023-0.552,0.404-1.018,0.956-1.042 l0.245-0.011c1.568-0.068,2.809-0.123,4.324,0.312c2.326,0.665,3.45,2.574,4.012,5.039c0.392-0.004,1.029-0.013,1.838-0.023 c4.072-0.055,12.547-0.167,15.883-0.089c0.501,0.011,0.99,0.016,1.463,0.02c3.554,0.033,7.229,0.067,7.306,4.05 c0.063,3.361-1.077,7.377-1.429,8.529c-0.094,0.309-0.182,0.611-0.268,0.906c-0.405,1.388-0.787,2.698-1.572,3.912 c-0.889,1.373-2.344,2.259-4.21,2.563C41.172,39.767,39.536,39.828,37.921,39.828z M23.854,21.674 c0.195,1.684,0.236,3.515,0.276,5.325c0.028,1.283,0.058,2.61,0.146,3.816c0.154,2.122,0.743,4.266,1.433,5.215 c1.188,1.629,5.605,1.689,7.729,1.718l1.441,0.029c2.342,0.059,5.257,0.132,7.334-0.206c1.293-0.21,2.279-0.79,2.852-1.675 c0.627-0.969,0.953-2.088,1.332-3.385c0.088-0.303,0.178-0.613,0.275-0.93c0.679-2.226,1.388-5.471,1.341-7.907 c-0.034-1.799-1.102-2.049-5.324-2.088c-0.482-0.004-0.98-0.009-1.491-0.021c-3.296-0.076-11.749,0.036-15.81,0.089 C24.766,21.663,24.243,21.669,23.854,21.674z"></path> </g> </g></svg>       
   
        </button>
        <button className="menu_button">

            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
            

</button>
</div>
        {/* <styles.MobileNav className='buttom lg:hidden d-md-none  fkMzzt   '>

    
                
                <span className="sr-only">items in cart, view bag</span>

                
       
                   <div className='icon_text'>
                   <div className="ml-4 flow-root lg:ml-6 ms-4" style={{marginRight:'30px'}}>
                  <p   className="group -m-2 flex items-center p-2" >
              
                  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25Z" fill="#212121"></path> <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" fill="#212121"></path> <path d="M16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21Z" fill="#212121"></path> </g></svg>
                  </p>
                </div>
                <span>cart    <span className="ml-2  text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {quantity}</span></span>
                </div>
                <div className='icon_text '>
     <Link to={'/'}>

     <svg viewBox="0 0 24 24" fill="none"  height="30px"
     xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
 <span>Home</span>
 </Link>
</div>
                <div className='icon_text  item_active '>
     <Link to={'/'}>

     <svg width="108px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.00999 11.22V15.71C3.00999 20.2 4.80999 22 9.29999 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" stroke="#292D32" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z" stroke="#292D32" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke="#292D32" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke="#292D32" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="#292D32" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>        </Link>

 <span>store</span>
</div>
                <div className='icon_text'>
                <WishList className="ms-2 me-2" 
    style={{width:'30px',cursor:'pointer',margin:'0px 10px'}}
    onClick={showDrawer}
    
    />
<span>Wishlist</span>


                </div>
   
              
          <div className='icon_text '>
          <button className="se"   >
  <span className='search_h'> search</span>
</button>
<span>
  search
</span>
          </div>
    
     
      
      
      
         </styles.MobileNav > */}
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