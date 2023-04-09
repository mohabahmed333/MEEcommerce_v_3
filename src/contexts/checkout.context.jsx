import { createContext, useState } from "react";

export const checkOutContext = createContext({
    current:0,
    setCurrent:()=>{},
    next:()=>{},
    prev:()=>{},
    setstep:()=>{},
    steps:[]
});



export const CheckOutProvider = ({children})=>{
    
const [current,setCurrent] = useState(0);
const [steps,setstep] = useState(3);
const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

const value = {next,prev,setCurrent,current,steps,setstep}
    return(
        <checkOutContext.Provider value={value}>{children}</checkOutContext.Provider> 
    )
}