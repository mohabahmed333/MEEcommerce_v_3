import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import{useParams} from 'react-router-dom';
import{CatougriesSelector,IsLoadingSelector} from '../../store/categories/category.selector'
import CollectionItem from '../collection-item/collection-item';
import OwlCarouselComponent from '../customs/owlCarousel/owlCarousel';
import './sim.scss'
const SimillarProduct= ()=>{
    const {cat,item}=useParams();
    const categories = useSelector(CatougriesSelector)
    const categoriesLoading = useSelector(IsLoadingSelector)
    const [categoriesItems,setCat]=useState(categories);
    const item_name =item.replace(/([A-Z])/g, ' $1').trim();
    const options = {
      responsiveClass: true,
     nav: true,
     dots: false,
     autoplay: false,
      smartSpeed: 1000,
      center: false
      ,
        margin:0,
        padding:0,

     responsive: {
         0: {
             items: 1,
             stagePadding:10,
         },
         400: {
             items: 1,
      margin: 2,
      stagePadding:10,

         },
         600: {
             items:1,
 
         },
         700: {
             items: 1,
 
         },
         1000:{
            items:5,
         },
         1500: {
             items: 4,
  
         }
     },
 };
 useEffect(()=>{
    setCat(categories)
  },
[cat,item])
return(<>
     <h6 className='heading'>You May Be Like Too</h6>
    <OwlCarouselComponent {...options} >


      { 
         //safe gards 
         categoriesItems?  categoriesItems[cat].filter((cat,idx)=>idx<5&&cat.name!== item_name).map(product=> {
  if(product.name===item){
  }
         return      < CollectionItem style={{width:'257px'}}   
         key={product.name}  item={product}/>
          //  < CollectionItem col={'col-md-3 col-sm-12'} 
          //   key={product.name}  item={product}/><div className"collections">

        
        
         
          }

      
      
          
          ):null
      
      } 
</OwlCarouselComponent>
 

 </>)
}



export default SimillarProduct ;