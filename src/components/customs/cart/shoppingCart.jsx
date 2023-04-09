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

export default function ShoppingCart({children}) {
  const totalpaid = useSelector(totalPaid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const open = useSelector(CartOpen);
   const user=useSelector(userSelectMemo);
   const userCart =()=>{;
    if(user&&user.cart){
      }else{
      return totalpaid
    }
      }
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={HandleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl" >
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6" style={{zIindex:10000}}>
                      <div className="flex items-start justify-between position-sticky bg-white"   
                       style={{top:'-24px',    padding: '11px' }}>
                        <Dialog.Title className="text-lg font-medium text-gray-900 " 
                     
                        >Shopping cart  </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClose={HandleClose} 
                          >
                            <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true"   /> 
                          </button>
                        </div>
                      </div>
                      {/* <div class="rSlider">
  <span class="slide"></span>
<input id="range" type="range" min="0" max="50000" />
</div>
<span id="demo"></span> */}
                   {children}
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6 " style={{overflow:'hidden',marginTop:'auto'}}>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>

                        <p>{userCart()}</p>
                      </div>
                      <hr/>
                      <div class="marquee">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
