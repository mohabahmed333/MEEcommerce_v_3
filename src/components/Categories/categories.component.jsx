import { Fragment, useEffect ,useState} from 'react';
   import CollectionItem from '../collection-item/collection-item';
  import { useSelector } from 'react-redux';
import{CatougriesSelector} from '../../store/categories/category.selector'
 import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import './cat.scss'
import { HandleDuplicate } from '../../componentsutlts/arrayHandler';
import { Collapse, Radio, Select } from 'antd';
 const { Panel } = Collapse;
const sortOptions = [
 
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
//  {name:'womens' ,href:'womens'},
//  {name:'hats' ,href:'hats'},
//  {name:'sneakers' ,href:'sneakers'},
//  {name:'mens' ,href:'mens'},
//  {name:'jakets' ,href:'jakets'},
]
let FiltersItem = [];
let filters = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 
const  Categories =()=>{
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
   return (
      <>
          <div className="bg-white">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              
                <li  >
                  <div className="flex items-center">
                    <Link   to={`/`} >
                    <i className"fa-solid fa-house me-3"></i>\
                    </Link>
                    <Link className='me-1 ms-1'  to={`/shop`} >
                     shop \
                    </Link>
                    <Link className='me-1 ms-1'  to={`/shop/${cat}`} >
                     {cat} 
                    </Link>
               
                   
                  </div>
                </li>
    
              
            </ol>
          </nav>
          <div className="cat_image">
            <img src='https://godofsmallthing.com/wp-content/uploads/2020/01/Fashion-Trends-2020.jpg' alt=''/>
          </div>
      <div>
        {/* Mobile filter dialog */}
  
<div className='row'>
          
   
  <div id='filter_c'  className="flex position-sticky
            items-baseline justify-around border-b border-gray-200 pt-24 pb-6">
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900">{cat.toLocaleUpperCase()}</h1> */}
{/*            
            <Radio.Group
            className='radio'
      defaultValue="a"
      size="small"
      style={{
         marginLeft:'20px'
      }}
    >
      <Radio.Button value="a"><i className"fa-solid fa-list"></i></Radio.Button>
      <Radio.Button value="b"><i className"fa-brands fa-buromobelexperte"></i></Radio.Button>
  
    </Radio.Group> */}
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
           <div className="flex items-center" style={{marginRight:'20px'}}>
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

           
                                
           </div>
          
          </div>
  <main   className="   col  main_s ">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className=" ">
          
 
              {/* Product grid */}
              <div className="lg:col-span-3">
              <div className="container-fluid">
<div className="row">

      { 
         //safe gards 
         products &&  products.map(product=> 
         < CollectionItem cat={cat} col={'col-md-3 col-sm-12'} 
          key={product.name}  item={product}/>)
      
      } 
</div>
</div>

                {/* Replace with your content */}

                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>

   
</div>
    
      </div>
    </div>

 

</>
   )

}
   

export default Categories;