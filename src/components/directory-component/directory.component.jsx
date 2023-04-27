import React from "react";
import './directory.component.scss'
import MenuItem from "../menu-item/menu-item.component";
import OwlCarouselComponent from "../customs/owlCarousel/owlCarousel";

class Directory extends React.Component{
constructor(){
    super();
    this.state={
        sections: [
            {
              title: 'hats',
              imageUrl: '             https://images.canadagoose.com/c_scale,f_auto,q_auto:best,w_1920/cg-global/pages/plp-category-banners/flagship/5426M-EMEA_PLP_Desktop.jpg',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://images.canadagoose.com/c_scale,f_auto,q_auto:best,w_1920/cg-global/pages/plp-category-banners/flagship/Flagship_Desktop_PLP_Mens07_Puffers.jpg',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://cdn.shopify.com/s/files/1/0112/6468/8186/files/banner1-2_109f8dce-43a9-4909-a7cd-e5b65ee60100.jpg?v=1665631686',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: '             https://images.canadagoose.com/c_scale,f_auto,q_auto:best,w_1920/cg-global/pages/plp-category-banners/flagship/2836LB_Flagship_Desktop_PLP_Womens.jpg',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: '             https://images.canadagoose.com/c_scale,f_auto,q_auto:best,w_1920/cg-global/pages/plp-category-banners/flagship/fs-shop-men-blacklabel.jpg',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ],
          options :{
            margin: 2,
           responsiveClass: true,
           nav: false,
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
                   stagePadding:25

               },
               1000:{
                  items:2,
            stagePadding:50

               },
               1500: {
                   items: 2,
                   stagePadding:50
       
               },
               600:{
                mergeFit:true
            },
            1000:{
                mergeFit:false
                ,
    
            }
           }
          
       }
    }
 


}
render(){
return (
  <>
  
 

<div className='directory-menu'>

<h2 className="text-center" style={{    fontFamily: 'cursive'   ,margin:'auto' ,   textDecorationLine: 'underline',
    padding: '12px' }}>Explore Categories</h2>
{
  <OwlCarouselComponent {...this.state.options} >
   { this.state.sections.map(({id,...OthterProps})=>{
  return <MenuItem key={id}  {...OthterProps}/> 

  })}
  </OwlCarouselComponent>
}

</div>
</>
)
}
}

export default Directory;