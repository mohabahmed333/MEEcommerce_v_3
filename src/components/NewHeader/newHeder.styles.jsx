import { Dialog } from '@headlessui/react';
import styled from 'styled-components';

const {div,header} = styled;


export const wrapperIndex = div`
 
  
`
export const Panal = styled(Dialog.Panel)`
z-index:1000
`
export const HeaderComponent = header`
 
`
export const RIGHT_HEADER = styled.div`
width: 49px;
 
 
 
 display:flex;
flex-direction: column;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
position: fixed;
left: 5px;
top: 142px;
border-right: 1px solid #ddd !important;
z-index: 10000000;
background: #fff;
border: 1px solid #ddd0;
padding-bottom: 12px;
border-radius: 6px;
box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    
  
`
export const MobileNav = styled.div`
position: fixed;
bottom: 0px;
left: 0px;
background: #fff;
z-index: 1000;
background: #fff !IMPORTANT;
width: 100%;
height: 76px;
display: flex;
justify-content: space-around;
align-items:center
`
export const HomeIcon = styled.i`border: 1px solid #bfbfbf;
border-radius: 10px;
font-size: 20px;
color: #096dd9;
padding: 17px;
margin: 0px;`
 

 
 