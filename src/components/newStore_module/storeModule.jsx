import {   useEffect, useState ,useContext} from 'react'
 import {   Squares2X2Icon } from '@heroicons/react/20/solid'
import './storeModule.scss'
import {   FilterOutlined } from '@ant-design/icons';
import grid_1 from '../../assets/icons_grid/grid-2-h-svgrepo-com.svg'
import grid_3 from '../../assets/icons_grid/grid-2-vertical-svgrepo-com.svg'
 import './compass/pulse.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CategoryImage, CatougriesSelector } from '../../store/categories/category.selector'
 import { HandleDuplicate } from '../../componentsutlts/arrayHandler'
import CollectionItem from '../collection-item/collection-item'
import $ from 'jquery'; 
import { FloatButton,Radio } from 'antd';
import { PreviewContext } from '../../contexts/previewContext';
import { Accordion } from 'react-bootstrap';
  import './price_range.scss'
import { FunnelIcon } from '@heroicons/react/24/outline';
 
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
  
let FiltersItem = [];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const StoreModule =()=>{
const [col,setCol]=useState('col-md-4')
const catogriesItems = useSelector(CatougriesSelector);
const category_image = useSelector(CategoryImage);
const [cat_image,Setmage]=useState(category_image);
const  {cat}  = useParams() ;
const [products,setProducts]=useState(catogriesItems[cat]);
const [options,setOptions]=useState('')
const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
const [prev_item,setPrev_item]=useState({item:{},open:false});
const {setOpen,setItem} = useContext(PreviewContext);
const [value, setValue] = useState(1);

    const navigate = useNavigate()
    const GOCategoy = (cat)=>{
      setMobileFiltersOpen(!mobileFiltersOpen)
      navigate(cat);
    }
    const openPreview=(item)=>{
      setItem(item);
      setOpen(true)
    }
    const previewitem = (item)=>{
      console.log(item,this);
      setPrev_item(()=>{
        return{
          ...prev_item,
          open:true,
          item:item
        }
      })
      openPreview(item)
    }
  useEffect(()=>{
  //adding  active width;
  document.querySelector('.best_container .new_item:nth-child(1)').classList.add('active_hover')
     

  $('.best_container .new_item').hover(function(){
$(this).addClass('active_hover').siblings().removeClass('active_hover')
  })
  //adding  active width;
  //  document.body.scrollTop = 0;
  //  document.documentElement.scrollTop = 0;
   setProducts(catogriesItems[cat]);
console.log(products)
   
  },[products,catogriesItems[cat] ]);
  // const  handleLink = ()=>{
  //   handleRouteGuide(catogriesItems,location,name)

  //  }
   useEffect(()=>{
     
  

      //  category_image
  Setmage( category_image[cat] );
       //  category_image
  
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

    },[cat ]);
 
useEffect(()=>{
  
  switch(options.name){
    case 'Price: High to Low':

    
      return     setProducts(    products.sort((a,b)=>{
        const price1= a.price
        const price2= b.price
        if(price1>price2)return -1;               
        else if(price1===price2)return 1;               
        else return 0;               
           }).slice())
          
            // return setProducts(LowTOHigh.splice())
  

    case 'Price: Low to High':  

       return    setProducts(()=>{

  return     setProducts( products.sort((a,b)=>{
    const price1= a.price
    const price2= b.price
    if(price1>price2)return  1;               
    if(price1<price2)return -1;        
 }).slice())
      
       })    // return setProducts(LowTOHigh.splice())

         
  }
},[])
 
 
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);

    // products,setProducts
    if(e.target.value===1){
      console.log('object')
      setProducts( products.sort((a,b)=>{return b.price-a.price}).slice());
      console.log(products.sort((a,b)=>(a-b)))
    }else{
      setProducts( products.sort((a,b)=>{return a.price-b.price}).slice())
      console.log(products.sort((a,b)=>b-a))
      
    }
  };
const max_value =  Math.max(...products.map(item=>item.price))
const min_value =  Math.min(...products.map(item=>item.price))
  
    return(

        <>
 

            <div className="bg-white">
    
      <div>
        {/* Mobile filter dialog */}
     
        <main className="mx-auto max-w-8xl    px-2">
 

          <section aria-labelledby="products-heading" className="pb-24 pt-1">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex all_page ">
              {/* Filters */}
           

              {/* Product grid */}
              <div className="lg:col-span-3 centerlize">
             
          
           {   category_image  &&  <div className='main_image'
               style={{background:`url(${cat_image&&cat_image.collImg})`
               ,position:'relative'
               }}>
                <div className="image-overlay"></div>
                <h1 className='Main_image_text'>Shop All Collection of mens</h1>

</div> }
            {/* {
              
  categoryImage &&<div className='main_image'
  style={{  position:'relative'
  }}>
    <img src={categoryImage.collImg}/>
    <h1 className='Main_image_text'>Shop All Collection of mens</h1>

</div> 

            } */}
  <div className='tabs'>
     
     <nav aria-label="Breadcrumb " className='b_new'>
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              
                <li  >
                  <div className="flex items-center">
                    <Link   to={`/`} >
                    <i className="fa-solid fa-house me-3"></i>
                     </Link>
                    <Link className='me-1 ms-1'  to={`/shop`} >
                     shop 
                    </Link>
                    <Link className='me-1 ms-1 active_ro'  to={`/shop/${cat}`} >
                     {cat} 
                    </Link>
               
                   
                  </div>
                </li>
    
              
            </ol>
          </nav>
  <h1  >New Arraival</h1>

                   {/* <div className='categories_flex'>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900" style={{display:'flex'}}> 
                      {FiltersItem.map((category) => (
                        <li key={category.name}   >
                          <Link to={`/shop/${category.href}`} className="block px-2 py-3">
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
           </div>
  */}
           
           
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              <p className='Results'>  {products.length}/Results</p>
</div>  
 <div className='best_product'>

 <h1 className='head'>Best Broducts</h1>
  <div className='best_container'>
{
          catogriesItems&&catogriesItems[cat].filter((product,idx)=>idx<5)
          .map(item=>{

return          (  <div className='new_item  ' key={item.name} style={{background:'none'}}>
            <div className='new_item_image'
             style={{backgroundImage: `url(${item.imageUrl})
             `,borderRadius:'0px',height:'450px',marginBottom:'20px'}}  >
                <p className='product_name'> {item.name}
                <i className="fa-solid fa-bookmark"></i>
                </p>
                <div className="blob blue"  onClick={previewitem.bind(null,item)} >+</div>
        
            </div>
            <div className='item_show'>
       
            </div>
            </div>)
          })
}
 
 
  </div>
  </div>

  <div className='row'>
<div className='col-md-3 left_ope'  style={{padding:'0px'}}>
<Accordion defaultActiveKey="0" flush alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>  <p>sort By Price </p>
</Accordion.Header>
        <Accordion.Body>

        <div className='categories_options'>
        <Radio.Group onChange={onChange} value={value} className="radio_custom">
      <Radio value={1}>
<div className="sort_element"><i className="fa-solid fa-arrow-up-long"></i>  heighest Price To low</div>
         </Radio>
      <Radio value={2}>
<div className="sort_element"><i className="fa-solid fa-arrow-down-long"></i> low Price To heigh</div>

      </Radio>


    </Radio.Group>
 
</div>
<p className='header_p'>Select price range $</p>
<div className="container">
<price-range currency="$">
    <div>
      <div>
        <input name="price-from" type="range" min="0" max={max_value} step="1" value={min_value}  aria-label="From" />
        <input name="price-to" type="range" min="0" max={max_value} step="1" value={max_value} aria-label="To" />
      </div>
    </div>
    <output>
      output
    </output>
  </price-range>

</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" alwaysOpen  >
        <Accordion.Header>select Categores</Accordion.Header>
        <Accordion.Body>
        <div className='categories_options'>
<ul role="list" className="px-2 py-3 font-medium text-gray-900" style={{display:'flex'}}> 
                      {
                      
                       catogriesItems&&Object.keys(catogriesItems).map((category) => (
                        <li key={category}   >
                          <Link to={`/shop/${category}`} className="block c_length px-2 py-3">
                            {category}
<p>{catogriesItems[category].length}</p>
                           </Link>
                        </li>
                      ))}
                    </ul> 
</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

<div className='acc_footer'>
<div className='buttons_contaner' style={{width:'100%'}}>
           

           <button type="button" className="  ml-1 p-2 text-gray-400 hover:text-gray-500 "
             onClick={()=>setCol('col-md-3')}>
                        <span className="sr-only">View grid</span>
                        <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
        
                      </button>
           <button type="button" className="  ml-1 p-2 text-gray-400 hover:text-gray-500 "
             onClick={()=>setCol('col-md-4')}>
                        <span className="sr-only">View grid</span>
                        <i className="fa-solid fa-bars"></i>
                      </button>
                      {/* <button type="button" className="mr-4   p-2 text-gray-400 hover:text-gray-500   ">
                        <span className="sr-only">View grid</span>
                      </button> */}
                      <button type="button"    onClick={()=>setCol('col-md-6 col-sm-6')}>
                        <span className="sr-only">View grid</span>
         
         <img src={grid_3}   className='grid_icon' alt=""  />
                       </button>
                      {/* <button type="button"   >
                        <span className="sr-only">View grid</span>
         
         <img src={grid_2}  className='grid_icon' alt=""   />
                       </button> */}
                      <button type="button"  onClick={()=>setCol('col-md-12')} >
                        <span className="sr-only">View grid</span>
         
         <img src={grid_1}   className='grid_icon' alt=""  />
                       </button>



                      </div>


                 <div className='collections_order_history'>
                  
                  <button>
                  collections <i class="fa-solid fa-bookmark"></i>
                    </button>
                    
                    <button>

                      order history
                      <i class="fa-solid fa-clock-rotate-left"></i>
                    </button>
                  </div>     
</div>

</div>
<div className='row col-md-9'>

  { 
         //safe gards 
         products &&  products.map(product=>  (
             < CollectionItem  cat={cat} col={col}   key={product.name}  item={product}/>
          
          
          ))
          
        }
          </div>
  </div>
          
          </div>
          </div>
          </section>
        </main>
      </div>
    </div>
    <FloatButton

    className='float_mobile'
      shape="square"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<FilterOutlined />}
    />
        </>
    )
};
export default StoreModule