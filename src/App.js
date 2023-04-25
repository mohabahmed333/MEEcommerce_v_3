import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';   
 import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import {Fragment, React, Suspense, useContext, useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Routes,Route, Outlet}from'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession, setUser, UploadUserDataStart } from './store/user/user.actions';
import NEWlyHeader from './components/NewHeader/newheader.jsx';
import { FetchCategoriesStart } from './store/categories/category.action';
 import { cartItems,totalCart,totalPaid } from './store/cart/cart.selector';
import { userSelectMemo } from './store/user/user.selector';
  import { lazy } from 'react';
import StoreModule from './components/newStore_module/storeModule';
import ShopPage from './pages/shoppage/shoppage.component';


const SignInOutLazy = lazy(()=>import('./pages/signInSignOutPage/signInAndSignOut.page'));
 const Search_page = lazy(()=>import('./components/collectionOfShop/collectionShop'));
const UserSettinglazy = lazy(()=>import('./pages/userPage/usersettings/usersettings'));
const UserPage_lazy = lazy(()=>import('./pages/userPage/userpage'))
const Shop_lazy = lazy(()=>import('./pages/shoppage/shoppage.component'));
const CheckOutPage_lazy = lazy(()=>import('./pages/checkoutpage/checkout.page'));
const  App = ()=> {
   const dispatch = useDispatch();
   const cart = useSelector(cartItems);
   const total = useSelector(totalPaid);
   const quantity = useSelector(totalCart);
   const user = useSelector(userSelectMemo);
 
  useEffect(()=>{
 dispatch(checkUserSession());
 dispatch(FetchCategoriesStart());
//  user&&dispatch(UploadUserDataStart({...cart,cart:cart},user));

  },[])
 
  

   return (
      <Fragment >

        <Routes>
  
        <Route path='/' element={<NEWlyHeader/>}>
        <Route  index element={<HomePage/>}/>
        <Route path='sign/*'   element={<Suspense fallback={'loading ,,,,'}><SignInOutLazy/></Suspense>}/>
        <Route path='shop/*'   element={<ShopPage/>}/>
        <Route path='checkOutPage'   element={
        <Suspense fallback='loading...'>
 <CheckOutPage_lazy/>
        </Suspense>
       }/>
        <Route path='user'  element={
        <Suspense fallback='loading'>
        <UserPage_lazy/>
        </Suspense>
        }/>

        <Route path='usersetting'  element={
        <Suspense fallback='loading'>

<UserSettinglazy/>
        </Suspense>
       }/>
        <Route path='search/:searchValue'   element={
        <Suspense fallback={'loading'}>
 <Search_page  />

        </Suspense>
       }/>
         </Route>


       </Routes>

      </Fragment>
    );
  } 


export default App;
