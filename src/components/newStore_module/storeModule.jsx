import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import './storeModule.scss'
import { ExpandAltOutlined } from '@ant-design/icons';
import grid_1 from '../../assets/icons_grid/grid-2-h-svgrepo-com.svg'
import grid_3 from '../../assets/icons_grid/grid-2-vertical-svgrepo-com.svg'
import grid_2 from '../../assets/icons_grid/grid-aspect-ratio-svgrepo-com (2).svg'
import OwlCarouselComponent from '../customs/owlCarousel/owlCarousel';
import './compass/pulse.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CatougriesSelector } from '../../store/categories/category.selector'
import { HandleDuplicate } from '../../componentsutlts/arrayHandler'
import CollectionItem from '../collection-item/collection-item'
import { handleRouteGuide } from '../../componentsutlts/handleRouteGuide'
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
    // { name: 'Most Popular', href: '#', current: true },
    // { name: 'Best Rating', href: '#', current: false },
    // { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
 
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
let FiltersItem = [];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const StoreModule =()=>{
  const [col,setCol]=useState('col-md-4')
  const catogriesItems = useSelector(CatougriesSelector);
  
  const  {cat}  = useParams() ;
  console.log(cat)
  const [products,setProducts]=useState(catogriesItems[cat]);
 
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const navigate = useNavigate()
    const GOCategoy = (cat)=>{
      setMobileFiltersOpen(!mobileFiltersOpen)
      navigate(cat);
    }
  useEffect(()=>{
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   setProducts(catogriesItems[cat]);


  },[products,catogriesItems[cat] ]);
  // const  handleLink = ()=>{
  //   handleRouteGuide(catogriesItems,location,name)

  //  }
   useEffect(()=>{
     const categoree = []
     const Itemid=0;
     catogriesItems&& Object.keys(catogriesItems).map((categ,idx)=>{
       subCategories.push({name:categ,href:categ,id:idx++});
       // categoree.filter((cat,idx,self)=>)
       const ids = subCategories.map(o => o.id)
 FiltersItem =HandleDuplicate(subCategories)
      //   subCategories.filter((cat,i,self)=>{
     //      const Duplicated = self.findIndex((cdat)=>cdat.id===cat.id);
     //    return cat[i]  !==Duplicated 
     //   })
      })
     //  console.log(subCategories)
     },[cat])
    const  sortingData=(option)=>{
      switch(option){
        case 'Price: High to Low':
         const HighToLow=   catogriesItems[cat].sort((a,b)=>{
              const price1= a.price
              const price2= b.price
           if(price1>price2)return -1;               
           else if(price1===price2)return 1;               
           else return 0;               
           });
           return   setProducts(HighToLow.splice())

        case 'Price: Low to High':  
         const LowTOHigh=   catogriesItems[cat].sort((a,b)=>{
              const price1= a.price
              const price2= b.price
           if(price1>price2)return  1;               
           if(price1<price2)return -1;               
           });
           
            return setProducts(LowTOHigh.splice())

             
      }
   }


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
 

          <section aria-labelledby="products-heading" className="pb-24 pt-1">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex all_page ">
              {/* Filters */}
           

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
    {/* <ul className='tab_inner'>
        <li className='tab_inner_value'>Hats</li>
        <li className='tab_inner_value'>sneakers</li>
        <li className='tab_inner_value'>Mens</li>
        <li className='tab_inner_value'>Wommans</li>
        <li className='tab_inner_value'>Boys</li> 
    </ul> */}
     <nav aria-label="Breadcrumb " className='b_new'>
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              
                <li  >
                  <div className="flex items-center">
                    <Link   to={`/`} >
                    <i class="fa-solid fa-house me-3"></i>\
                    </Link>
                    <Link className='me-1 ms-1'  to={`/shop`} >
                     shop \
                    </Link>
                    <Link className='me-1 ms-1'  to={`/shop/${'cat'}`} >
                     {cat} 
                    </Link>
               
                   
                  </div>
                </li>
    
              
            </ol>
          </nav>
                   <div className='categories_flex'>
           <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {FiltersItem.map((category) => (
                        <li key={category.name}   >
                          <Link to={`/shop/${category.href}`} className="block px-2 py-3">
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
           </div>
 
              <div className='buttons_contaner'>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                               className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                              style={{cursor:'pointer'}}
                              onClick={sortingData.bind(null,option.name)}
                            >
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

   <button type="button" className="  ml-1 p-2 text-gray-400 hover:text-gray-500 "
     onClick={()=>setCol('col-md-3')}>
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />

              </button>
   <button type="button" className="  ml-1 p-2 text-gray-400 hover:text-gray-500 "
     onClick={()=>setCol('col-md-4')}>
                <span className="sr-only">View grid</span>
                <i class="fa-solid fa-bars"></i>
              </button>
              {/* <button type="button" className="mr-4   p-2 text-gray-400 hover:text-gray-500   ">
                <span className="sr-only">View grid</span>
              </button> */}
              <button type="button"    onClick={()=>setCol('col-md-6 col-sm-6')}>
                <span className="sr-only">View grid</span>
 
 <img src={grid_3}   className='grid_icon' alt="" srcset="" />
               </button>
              {/* <button type="button"   >
                <span className="sr-only">View grid</span>
 
 <img src={grid_2}  className='grid_icon' alt="" srcset="" />
               </button> */}
              <button type="button"  onClick={()=>setCol('col-md-12')} >
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

 <h1 className='head'>Best Broducts</h1>
  <div className='best_container'>
{
          products &&  products.filter((product,idx)=>idx<5).map(item=>{

return          (  <div className='new_item  ' style={{background:'none'}}>
            <div className='new_item_image'
             style={{backgroundImage: `url(${item.imageUrl})
             `,borderRadius:'0px',height:'450px',marginBottom:'20px'}}  >
                <p className='product_name'> {item.name}
                <i class="fa-solid fa-bookmark"></i>
                </p>
                <div class="blob blue"  >+</div>
        
         
            </div>
            </div>)
          })
}
 
 
  </div>
  </div>
  <h1 className='head'>New Arraival</h1>
<div className='row'>

  { 
         //safe gards 
         products &&  products.map(product=> 
         < CollectionItem cat={cat} col={col} 
          key={product.name}  item={product}/>)
      
      } 
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
export default StoreModule