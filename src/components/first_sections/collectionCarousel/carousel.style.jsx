import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
const {div,p,a,img}=styled
export const LeftCarousel = styled(Carousel)`
position: relative;
border-radius: 10px;
 
overflow: hidden;
`
export const Discount = div`
 
background-image: url(
    https://img.freepik.com/free-vector/flat-year-end-sale-banner-template_23-2149883419.jpg?w=1380&t=st=1672593788~exp=1672594388~hmac=ea34e188b4513d61a14fc1627d6b901865eab24a98d45ce5d8347bfa63564308
);
height: 200px;
background-position: center left;
border-radius: 6px;
position: relative;
background-size: cover;
 

`
export const Daily = div`
height: 231px;
border: 1px solid #ddd;
border-radius: 10px;
margin-top: 10px;
box-shadow: rgb(0 0 0 / 24%) 1px 1px 1px;
overflow-x: auto;
overflow-y: hidden;
margin-bottom:10px;

`
// background-image: linear-gradient(-45deg,#ffb174,#ff7295 48%,#f34c4c) !important;
export const Daily_header = div`
display:flex;
justify-content:space-between
`
export const Daile_header_title = p`
 
    font-weight: bolder;
    font-size: 24px;
    color: #fff;
    margin-left: 10px;
   color: #262a2e
`
export  const Daile_header_title_colored =a`

color: red !important;

`
export const Image = styled.img `
height: 126px;
border-radius: 6px;
`
export const wrapper = div`
 border-radius: 10px;
padding: 10px;
height: 302px;
border: 1px solid #ddd;
margin-top: 10px;
`
export const Price = p`
position: absolute;
    top: 0px;
    color: #333;
    background: #fd0000db;
    left: 12px;
    color: #fff;
    padding: 4px;
    border-bottom-right-radius: 10px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;`


    export const More = a`
    margin: 3px 10px;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-decoreation:none
    `