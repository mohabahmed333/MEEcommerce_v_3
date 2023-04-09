import './collection.preview.scss';
import CollectionItem from "../collection-item/collection-item";
import OwlCarouselComponent from "../customs/owlCarousel/owlCarousel";
 import {Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import{CatougriesSelector, IsLoadingSelector,categoriesSelectorReducer} from '../../store/categories/category.selector'
import { Loading } from '../loadingComponents/load.component/loading.component';
import { PreviewComponent } from '../previewComponent/preview';
import { userSelectMemo } from '../../store/user/user.selector';
const CollectionPreview = ({route=''})=>{
 const user = useSelector(userSelectMemo);
const catogriesItems = useSelector(CatougriesSelector)
const ca = useSelector(categoriesSelectorReducer);
console.log(ca);

const ProductAfterWishList  =[];
if(!!user){
    const {wishList  }= user 
    console.log(user,wishList);
    catogriesItems&&  Object.values(catogriesItems).map(item=>{
 
 console.log(item);
     })
}
     const IsloadingSpin = useSelector(IsLoadingSelector);
    
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
                      stagePadding:10,

                  },
                  700: {
                      items: 1,
                      stagePadding:10,

                  },
                  1000:{
                     items:4,
                  },
                  1500: {
                      items: 4,
                      stagePadding:100,
          
                  }
              },
          };

 console.log(route)
 
return (<>
{
 IsloadingSpin?(<Loading/>):ca['categories'].map(collec=>{
  return<>
  <div className='all_container'>
  <img src={collec.collImg
} />
   <div className="container-fluid"  style={{zIndex:'2 !important'}}>
  
  <div  key={collec.title}  className="collection-preview title  position-sticky mt-1 pt-1 p_t">
    <div className=" title_parent">
    <div className="flex  flex-direction-column justify-content-between align-items-center">
    <h4 className=' ' >{collec.title.toUpperCase()} </h4>
   <Link className='logo-container' to={ `${route}${collec.title}`} >

         <div className='more'><p>
         shop All Collections 
           </p><i class="fa-solid fa-arrow-right"></i></div>  
   </Link>

</div>
</div>

    </div>
    </div>

    {
        <div className="container-fluid " style={{zIndex:'2 !important'}}>

<OwlCarouselComponent {...options} >

{    collec['items'].
map((product)=>{
      
      return<CollectionItem style={{margin:'unset'}} key={product.name} 
      cat={collec.title.toUpperCase()} id={product.name} item={product}/>
     

      }
      )}
             </OwlCarouselComponent> 
</div>
    }
    
  </div>
 
  </>

})
}
  
{/* {  Object.keys(catogriesItems).map(title=>{ 
     return <div className="container-fluid"  style={{zIndex:'2 !important'}}>

 
    
<div className="container-fluid " style={{zIndex:'2 !important'}}>

<OwlCarouselComponent {...options} >

{    catogriesItems[title].
map((product)=>{
      
      return<CollectionItem style={{margin:'unset'}} key={product.name} cat={title.toUpperCase()} id={product.name} item={product}/>
     
      }
      )}
             </OwlCarouselComponent> 
</div>
</div>

    } 

    
    ) 
    
    } */}

 </>

)


}

export default CollectionPreview;