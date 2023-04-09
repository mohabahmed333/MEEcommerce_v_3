import React from "react";
import './menuItem.scss'
import WithRouter from  '../../shared/WithRouter.component';
import { useNavigate,useMatch,useLocation } from "react-router-dom";

const MenuItem = ({title,imageUrl,size,linkUrl})=>{
    let {pathname} = useLocation();
    let navigate  = useNavigate()
    return <div 

className={`${size} menu-item`}

>

<div className="background-image" 
style={{
    backgroundImage:`url(${imageUrl})`,
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'center center',
    backgroundOrigin:'content-box',
    backgroundSize:'cover',
    height:'100%',
    overflow:'visible'
}}
/>
<div className='content' onClick={()=>{navigate(`${pathname}${linkUrl}`)}}>
<button className="button_name">{title}</button>
</div>
</div>

}
export default MenuItem;