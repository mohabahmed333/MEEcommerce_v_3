
export const UserDetails=({user})=>{
 


    return(
        <div className="container-fluid">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">  Information</h3>
               </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500"> name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${user['displayName']}   `}</dd>
                  </div>
                   
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="text-sm font-medium text-gray-500">Email address</dd>
                    <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user['email']}</dt>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="text-sm font-medium text-gray-500">city</dd>
                    <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user['city']}</dt>
                  </div>
                  
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="text-sm font-medium text-gray-500">country</dd>
                    <dt className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> {user['country']}</dt>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">postal code</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user['postal-code']}</dd>
                  </div>
                </dl>
              </div>
            </div>
        </div> 
    )
}