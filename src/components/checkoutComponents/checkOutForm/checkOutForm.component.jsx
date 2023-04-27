import { useContext, useEffect, useState } from "react"
import { checkOutContext } from "../../../contexts/checkout.context";
import{FormHolder } from './checkOutForm.styles..jsx'
import { Button, Modal } from "antd";
import { Holder } from "../checkOutSubmit/checkOutsubmit.styles";
import{CheckOutSubmit} from '../checkOutSubmit/checkOutSubmit.component';
import '../checkOutItem/checkOut.css'
const UserInferomation  = {
  country :'',
  'first-name':'',
 'last-name':'',
 'email-address':'',
 'street-address':'',
 city:'',
 region:'',
 'postal-code':'',
}
 export  const CheckOutForm  =({products})=>{
  const { current,next,prev,steps} = useContext(checkOutContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo , SetUserInferomation]=useState(UserInferomation);


  const changingInput = (e)=>{
    const {name,value} = e.target;
    SetUserInferomation({...userInfo,[name]:value})
    
    
  }
  const showModal = (e) => {
    e.preventDefault()
    if(userInfo['first-name']===''&&userInfo['last-name']===''&&userInfo['email-address']===''&&userInfo['street-address']===''&&userInfo['city']==='')return;

    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let cites = [];

      useEffect(()=>{

        (async () => {
          const where = encodeURIComponent(JSON.stringify({
            "featureCode": {
              "$exists": true
            }
          }));
          const response = await fetch(
            `https://parseapi.back4app.com/classes/City?limit=13&where=${where}`,
            {
              headers: {
                'X-Parse-Application-Id': '45xTnNyaGp6x9HEIH77Y531d8L5dkIrYDN0tAP8y', // This is the fake app's application id
                'X-Parse-Master-Key': 'FqDeYeNqkOl13b0W26ClmmSVrEsY59ZzUgDfgAaS', // This is the fake app's readonly master key
              }
            }
          );
          const data = await response.json(); // Here you have the data that you need
          
          cites = [...data.results]
         })();
      },[]);
     return(
        <>
 
<Modal
width={350}
 footer={null}
title="checkout" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
 <CheckOutSubmit userInfo={userInfo}/>
      </Modal>
<div className="mt-10 sm:mt-0">
<div className="mt-5 md:col-span-2 md:mt-0 ">
  <h4 className="text-center">  Order Details</h4>
            <FormHolder   >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}
required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}
                        required
                       > 
                       <option>Egypt</option>
                       <option>Saudi Arabia</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}

                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={changingInput}

                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        onChange={changingInput}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                 <div className="steps-action">
                 {current > 0 && (
            <button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              back
            </button>
          )}
          
           <button
            className="inline-flex justify-center rounded-md border border-transparent
             bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm
              hover:bg-indigo-700 focus:outline-none focus:ring-2
               focus:ring-indigo-500 focus:ring-offset-2"
               type="button"
            onClick={showModal}
         
         >
           check out
         </button>
   
        </div> 
                </div>
              </div>
            </FormHolder>
          </div>
      </div>
</>

        )
}