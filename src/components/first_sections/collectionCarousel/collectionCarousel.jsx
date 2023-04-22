import Carousel from 'react-bootstrap/Carousel';
import { LeftCarousel } from './carousel.style';
import { useNavigate } from 'react-router-dom';
import '../first.scss';
import imag1 from'../../../assets/silder/banner4_7b0b816f-11ad-4ec5-95fe-ba51c894afe3_900x-removebg-preview.png'
import imag2 from '../../../assets/silder/slider1_d5297485-f6c9-4f25-9e82-ecc85a248d7d_1512x-removebg.png'
import imag3 from '../../../assets/silder/slider2_49fbba17-3cae-49e0-be00-b647b0f4efac_1512x-removebg-preview.png'
function NoTransitionExample() {

 const coll =  [
        // {
        //   title: 'hats',
        //   imageUrl: 'https://img.freepik.com/free-vector/realistic-year-end-sale-banner-template_52683-100314.jpg?w=1380&t=st=1672592042~exp=1672592642~hmac=dabcc5848aa7c022ae6e8aef616ae4c5afdd7ee88731d46c2302484a21e0e2c8',
        //   id: 1,
        //   linkUrl: 'shop/hats'
        // },
        {
          title: 'wommans',
          imageUrl:  imag1,
          id: 2,
          linkUrl: 'shop/wommans'
        },
        {
          title: 'Hats',
          imageUrl: imag2,
          id: 3,
          linkUrl: '/shop/hats'
        },
        {
          title: 'mens',
          imageUrl:imag3,
          size: 'large',
          id: 4,
          linkUrl: 'shop/mens'
        },
        // {
        //   title: 'mens',
        //   imageUrl: 'https://f.nooncdn.com/cms/pages/20221225/d8e73a1a90d8ac0887c4a3c983f0b3f1/Generic/en_dk_eg-hero-banner-01.png',
        //   size: 'large',
        //   id: 5,
        //   linkUrl: 'shop/mens'
        // }
      ]
      const navigate = useNavigate()
  return (
    <div className='carousel_holder' >

    <LeftCarousel fade>
        {coll.map(item=>{
          console.log(item);
            return(
                <Carousel.Item className='carousel_item' 
              key={item.title}   style={{backgroundImage:`url(${item.imageUrl})`}}>  
        {/* <img
       
          className="d-block w-100 car_image"
          src={item.imageUrl}
          alt="First slide"
        /> */}
        <Carousel.Caption className='mt-5'>
         <h1 style={{fontSize:'100px',fontWeight:'100'}}>{item.title}</h1>
         <p>Top Sale Up To 50% </p>
         <button className="shop_now"  onClick={()=>navigate('/shop')}>shop now</button>
          </Carousel.Caption>
      
      </Carousel.Item>
     
  
            )
        })}
     
     
    </LeftCarousel>.
<div className='carousel_right'>
  <h1>fashion up<br></br> your look</h1>

  <div className='trend_container'>
<button className='btn btn-danger btn-red'>
  Explore Now
</button>
  <h6 className='trend'>
  <svg width="30px" height="30px" viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" strokeWidth="0.00024000000000000003">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"/>

<g id="SVGRepo_iconCarrier">

<path fillrule="evenodd"  cliprule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12c0 1.55-.806 2.876-1.993 3.73.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227 1.093 1.092 1.468 2.608 1.227 4.05Zm-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232Z" fill="#65dfa8"/>

</g>

</svg>
     what's Trending ?</h6>
  </div>
  <div className='boxses'> 
  <div className='blue_box'>
   <h5><span className="black">live</span> For Fashion</h5>
  </div>
  <div className='yellow_box'>
   <h5> shop  <br /> <span className="big">Now !</span></h5>
  </div>
  </div>
</div>
    </div>

  );
}

export default NoTransitionExample;