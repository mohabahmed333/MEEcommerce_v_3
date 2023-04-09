import styled from 'styled-components';
const {div} =styled;

export const ImageContainer = div`
height: 430px;
width:100% ;
background-size:cover;
background-position:center center;
background-image:url(${props =>props.imageUrl})
`
export const ProductInfo =div`
display:flex;
flex-direction:column
` 