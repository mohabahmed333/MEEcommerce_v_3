import { createContext, useState,useEffect } from "react";
import {  GETCollection} from "../firebase/firebaseMtethods/addCollectionAndDocuments";
 // import{shop_data} from '..'
export const CategoriesContext =createContext({
    catogriesItems:{},
    catougryRender:false,
    SetcatougryRender:()=>{}
 });


export const CategoriesContextProvider = ({children})=>{
// useEffect(() => {
//     AddCollectionAndDocument('categories',SHOP_DATA)


// }, [])
const shopState = useState({});
const [catogriesItems,SetCatogriesValue] = shopState;
const [catougryRender,SetcatougryRender] = useState(false);
const value = {catogriesItems,catougryRender,SetcatougryRender};
console.log(catougryRender)
useEffect(()=>{
      ( async function GetCatogries(){

        const catogries = await  GETCollection();
        SetCatogriesValue(catogries)
    }())
},[])


return<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

}