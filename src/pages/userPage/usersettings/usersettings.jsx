import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserDataBase } from "../../../firebase/firebaseMtethods/adduserData";
import { userSelectMemo } from "../../../store/user/user.selector";
 
import FileUpladManger from "../../../components/customs/fileUpload/fileUpload";
import { UploadUserDataStart } from "../../../store/user/user.actions";
const UserSetting = ()=>{
  const dispatch = useDispatch()
  const userD ={}
  const user = useSelector(userSelectMemo);
  // const selectImage = useSelector(selectImageUser);
  const [userData,setUserData]=useState(userD);
  if(!user  )return;

  const addUserData = (event)=>{
     const inputs = Array.from(event.target);
    event.preventDefault()
    inputs.map(input=>{
      const {name,value}=input;
      if(name==="",value==="")return;
     userD[name]=value;
     setUserData(userD)
     });
     console.log(userData)
     dispatch(UploadUserDataStart(userData,user))
     addUserDataBase(userD,user)
  }
    return(
       
         <>
           <div className="container">
            <div className="m-auto">
            <div className="container">
          <div className="m-auto">
             <div>
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <div className="mt-1 flex items-center">
                              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                               <img src={user.imageUrl?`${user.imageUrl}`:''} alt="" />
                              </span>
                              <FileUpladManger user={user}/>
                                
                            </div>
                          </div>
           </div>
         </div>
       
         <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                      <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                  </div>
              <div  >
                <div  >
                
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <form  onSubmit={addUserData}>
                      <div className="overflow-hidden shadow sm:rounded-md">
                 
                        <div className="bg-white px-4 py-5 sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="first-name"
                               className="block text-sm font-medium text-gray-700">
                                First name
                              </label>
                              <input
                              placeholder={user['first-name']}
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md
                                 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                              </label>
                              <input
                                placeholder={user['last-name']}
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 block w-full rounded-md border-gray-300 
                                shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-4">
                              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                Email address
                              </label>
                              <input
                              placeholder={user['email']}
                                type="email"
                                name="email"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-3">
                              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                              </label>
                              <select
                              placeholder={user['country']}
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                              </select>
                            </div>
        
                            <div className="col-span-6">
                              <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Street address
                              </label>
                              <input
                                placeholder={user['street-address']}
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 block w-full 
                                rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
        
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                              </label>
                              <input
                              value={user['city']}
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                          <button
                          
                          
                            className="inline-flex justify-center
                             rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200" />
                </div>
              </div>
            </div>
           </div>
      
        
           
            </>
    )
}

export default UserSetting