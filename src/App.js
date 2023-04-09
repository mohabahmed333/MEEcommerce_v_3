import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';   
 import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import {Fragment, React, useContext, useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Routes,Route, Outlet}from'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component';
import UserPage from './pages/userPage/userpage';
 import SignInAndSignOut from './pages/signInSignOutPage/signInAndSignOut.page';
import {ChecOutPage} from './pages/checkoutpage/checkout.page';
  import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession, setUser, UploadUserDataStart } from './store/user/user.actions';
import NEWlyHeader from './components/NewHeader/newheader.jsx';
import { FetchCategoriesStart } from './store/categories/category.action';
import { UserSetting } from './pages/userPage/usersettings/usersettings';
import { cartItems,totalCart,totalPaid } from './store/cart/cart.selector';
import { userSelectMemo } from './store/user/user.selector';
import { CollectonShop } from './components/collectionOfShop/collectionShop';
import { searchContext } from './contexts/searchContext';
import { AddItemToCartFunc } from './store/cart/cart.action';
import{StoreModule} from './components/newStore_module/storeModule'
 const  App = ()=> {
   const dispatch = useDispatch();
   const cart = useSelector(cartItems);
   const total = useSelector(totalPaid);
   const quantity = useSelector(totalCart);
   const user = useSelector(userSelectMemo);
  const {SearchValue} = useContext(searchContext);

  useEffect(()=>{
 dispatch(checkUserSession());
 dispatch(FetchCategoriesStart());

  },[])
  useEffect(() => {
    const cartObj= {
      'cart':{
        'items':cart,
        total,
        quantity
      }
     }
     user&&dispatch(UploadUserDataStart({'cart':cartObj},user));
    //  dispatch(AddItemToCartFunc())
   },[cart])
  

   return (
      <Fragment >

        <Routes>
  
        <Route path='/' element={<NEWlyHeader/>}>
        <Route  index element={<HomePage/>}/>
        <Route path='sign/*'   element={<SignInAndSignOut/>}/>
        <Route path='shop/*'   element={<ShopPage/>}/>
        <Route path='checkOutPage'   element={<ChecOutPage/>}/>
        <Route path='user'  element={<UserPage/>}/>
        <Route path='usersetting'  element={<UserSetting/>}/>
        <Route path='search/:searchValue'   element={<CollectonShop  />}/>
        </Route>
        <Route path='store'   element={<StoreModule  />}/>


       </Routes>

      </Fragment>
    );
  } 


export default App;
