import { useSelector } from "react-redux"
import { CatougriesSelector } from "../../store/categories/category.selector";
import { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import searchImage from '../../assets/undraw_landscape_photographer_b0ad.svg'
import CollectionItem from "../collection-item/collection-item";
import { HandleDuplicate } from "../../componentsutlts/arrayHandler";
import OwlCarouselComponent from "../customs/owlCarousel/owlCarousel";
import './collection-shop.scss'
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../contexts/searchContext";
import ImageWithText from "../ImageWithText/ImageWithText";
 const CollectonShop =(  )=>{
    const catogriesItems = useSelector(CatougriesSelector);
     const [categories,SetCategories]=useState([]);
     const [DataTF ,SetDataTF]=useState(false)
    const navigate = useNavigate();
    const {searchValue} = useParams()
    const {SetSearchtem}=useContext(searchContext)
     let catSearch = searchValue;
      //check categories loading
 useEffect(()=>{
  
    SetSearchtem(searchValue)


    
        //successed loading ;
       
 
    
},[searchValue])
useEffect(()=>{
  
        if(searchValue !=='' && Object.keys(catogriesItems).length>0){

        const CateggoriesAfterFiltered= Object.keys(catogriesItems).map(categortitle=>{

            
        const filterd = catogriesItems[categortitle].filter(item=>item.name.toUpperCase().trim().includes(searchValue.toUpperCase().trim()) );
        
        
 
        if(filterd.length===0**filterd.length>1){
            SetDataTF(true)

        }else{
            console.log('disse')
            SetDataTF(false)
        }
        return filterd
        //   return catogriesItems[categortitle].filter(item=>item.name.toUpperCase().trim().includes(catSearch.toUpperCase().trim()) )
        })
        console.log(CateggoriesAfterFiltered);
        SetCategories(CateggoriesAfterFiltered )
    
     console.log(categories);
}
},[searchValue])
const options = {
    margin: 3,
   responsiveClass: true,
   nav: true,
   dots: false,
   autoplay: false,
    smartSpeed: 1000,
   

   responsive: {
       0: {
           items: 2,
       },
       400: {
           items: 4,
    margin: 2,

       },
       600: {
           items: 4,
       },
       700: {
           items: 2,
       },
       1000:{
          items:4,
       },
       1500: {
           items: 5,

       }
   },
};
    return <>

         {
        //     <OwlCarouselComponent {...options}>
        //    { Object.keys(catogriesItems).map(title=>{
        //         return    (<div className='title' key={title} onClick={()=>{
        //             navigate(`/shop/${title}`)
        //         }}>{title}</div>
        // )
                        
                    
         
        //     })}
        //            </OwlCarouselComponent>  
        }
<div className="container">
      <div className="row">

    {
    // console.log(categories)
    catSearch===''?<h1>enter something To Search</h1>: categories.length!==0 &&
     categories.map(items=>
                {
                 return   items.map(product=>{
                        

                    return(

       <CollectionItem className='col-md-3' col={'col-md-3 col-sm-6'} key={product.name}  
       id={product.name} item={product}/>)
                    }) 

                }) 
            
                }
              
                <div className="no_wrapper">
                    
              {  DataTF?<ImageWithText style={{width:'300px'}} image={searchImage} width={'300px'} height={'300px'} text={"there's no search with this keyword"}/>:<></>}
                </div>
        </div>
        </div>
        </> 
}
export default CollectonShop