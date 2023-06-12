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
bottom: 7px;
left: 0px;
z-index: 1000;
background: #eeeeeead !IMPORTANT;
width: 100%;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
justify-content: space-between;
-ms-flex-align: center;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
border: 1px solid #fff;
border-radius: 0px 0px 10px 10px;
box-shadow: rgba(100,100,111,0.2) 2px -8px 29px 0px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
padding: 0px 13px;
padding-bottom: 12px;
border-radius: 15px;
padding: 0px 9px;
width: 93%;
margin: auto;
left: 50%;
transform: translateX(-50%);
border: 1px solid #ddd;
background: #ddddddc7 !IMPORTANT;
padding-bottom: 8px;
`
export const HomeIcon = styled.i`border: 1px solid #bfbfbf;
border-radius: 10px;
font-size: 20px;
color: #096dd9;
padding: 17px;
margin: 0px;`
 

 
 