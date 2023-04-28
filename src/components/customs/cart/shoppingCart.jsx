/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
 import {   useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setOpen} from '../../../store/cart/cart.action'
import { CartOpen,totalPaid } from '../../../store/cart/cart.selector';
import { userSelectMemo } from '../../../store/user/user.selector';
import './s.scss'
import { Offcanvas } from 'react-bootstrap';

export default function ShoppingCart({children}) {
  const totalpaid = useSelector(totalPaid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const open = useSelector(CartOpen);
   const user=useSelector(userSelectMemo);
    
 const GoToCheckOut = ()=>{
  navigate('./checkOutPage');
  dispatch( setOpen(!open))

}
const HandleClose = ()=>{
  dispatch( setOpen(!open))
}
const ShopNavigate=()=>{
  navigate('/shop');
  dispatch( setOpen(!open))

}
  return (
   <Offcanvas show={open }placement='end' onHide={HandleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{marginLeft:'auto'}}>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="flex h-full flex-col  
  " >
                    <div className="flex-1 
                    overflow-y-auto py-6   sm:px-6" style={{zIindex:10000}}>
                 
                
                   {children}
                    </div>

                    <div className="border-t border-gray-200   px-4 sm:px-6 " style={{overflow:'hidden',marginTop:'auto'}}>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>

                        <p>{totalpaid }$</p>
                      </div>
                      <hr/>
                      <div className="marquee">
  <div>
    <span>Free Shipping Into Cairo </span>
    <span>All charges are billed in USD. While the content of your cart is currently displayed in EGP, the checkout will use USD at the most current exchange rate.

</span>
    </div>
</div>
<hr/>

                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <hr/>

                   
                      <div  className= "checkout_container m  flex justify-center text-center
                       text-sm text-gray-500 checkOut_container"  style={{marginTop:'auto !Important'}}>
                     
                        <a
                      onClick={GoToCheckOut}
                          className=" checkout_button flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                  
                        <p >
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500 d-flex flex-items-center"
                            onClick={() => setOpen(false)}
                          >
                            <div onClick={() => ShopNavigate()}style={{cursor:'pointer'}} >
                            Continue Shopping
                            </div>
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                    </div>
         </Offcanvas.Body>
      </Offcanvas>
  )
}
