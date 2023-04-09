import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl_carousel.scss'
 const OwlCarouselComponent  =({children, ...OwlCarouselConfig})=>{
    const  {autoplay,...items} = {...OwlCarouselConfig};
     return (  
         
   <div className='container-fluid' >            
        <OwlCarousel className="owl-theme owl-carousel"{...items}>  
        {children}
        </OwlCarousel>  
  </div>  

      )  
    
 }  
       
          
      
        
  
      export default OwlCarouselComponent