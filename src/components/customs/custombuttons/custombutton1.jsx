import React from "react";
import  * as mohab from  './custombutton.styles.jsx'


const CustomButton =({children,color,...otherprops})=>{
return <mohab.Button style={{backgroundColor:`${color}`,marginLeft:'10px' ,color:"white"}}  className="custom-button"{...otherprops}>
    {children}

</mohab.Button>

}

export default CustomButton;