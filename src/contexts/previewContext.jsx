import { createContext, useState } from "react";

export const PreviewContext =createContext({item:{},open:false,setOpen:()=>{}});




export const  PreviewContextProvider=({children})=>{
const [open,setOpen]=useState(false);
const [item,setItem]=useState({});
const value = {open,setOpen,item,setItem};
  return  (<PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>)
}