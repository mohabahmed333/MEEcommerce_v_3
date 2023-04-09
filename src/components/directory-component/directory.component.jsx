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
              imageUrl: 'https://cdn.shopify.com/s/files/1/0397/0396/9949/products/TREMELO-BLACK-BAKERBOY_1600x.jpg?v=1664458330',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/5_360x.jpg?v=1664941790',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://cdn.shopify.com/s/files/1/0112/6468/8186/files/banner3_8a1523b1-2845-4f9e-851a-6f3779baa171_360x.jpg?v=1664270357',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/45_360x.jpg?v=1664955136',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://cdn.shopify.com/s/files/1/0112/6468/8186/products/100_360x.jpg?v=1664960073',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ],
          options :{
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
                   stagePadding:25

               },
               1000:{
                  items:3,
            stagePadding:100

               },
               1500: {
                   items: 3,
                   stagePadding:100
       
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