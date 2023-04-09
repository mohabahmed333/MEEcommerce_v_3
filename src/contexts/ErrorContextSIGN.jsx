import CreateContext, { useState } from'react';

const ErrorHandlerContext = CreateContext({
    error:null,
    setValue:()=>null
});



const ContextProvider = ({children})=>{
     const  [error,setValue]= useState(null);
     const value = {error,setValue};
     
   return <ErrorHandlerContext.provider value={value} >{{children}}</ErrorHandlerContext.provider>
}