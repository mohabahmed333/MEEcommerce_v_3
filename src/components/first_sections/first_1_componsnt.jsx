 import { useSelector } from 'react-redux';
import { CatougriesSelector } from '../../store/categories/category.selector';
import { Discount ,Daily,Daily_header,Daile_header_title_colored
    ,Daile_header_title, 
    Image,
    Price,
    More
} from './collectionCarousel/carousel.style';
import NoTransitionExample from "./collectionCarousel/collectionCarousel";
import { useNavigate } from 'react-router-dom';
import OwlCarouselComponent from '../customs/owlCarousel/owlCarousel';
 export const First_one=()=>{
    const categories = useSelector(CatougriesSelector);
 const navigate = useNavigate();
 const options ={
    margin: 3,
   responsiveClass: true,
   nav: true,
   dots: true,
  
    smartSpeed: 1000,
    merge:true,
 margin:10,
   

   responsive: {
       0: {
           items: 4,
       },
       400: {
           items:4,
    margin: 2,

       },
       600: {
           items: 4,
       },
       700: {
           items: 4,
       },
       1000:{
          items:5,
       },
       1500: {
           items: 5,

       }
   },
   678:{
    mergeFit:true
},
1000:{
    mergeFit:false
}
}
    return(
        <>
        <div className="container-fluid mt-3 mb-4">
            <div className="row">
            <div class="col-md-12">
<NoTransitionExample />

            </div>

        </div>



        </div>
        
        </>
    )
}