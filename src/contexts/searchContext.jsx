  import   {useState,createContext, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { userSelectMemo } from "../store/user/user.selector";
import { UploadUserDataStart } from "../store/user/user.actions";
export const searchContext = createContext({
    SearchValue :'',
    setSearch:()=>null,
    openS:false,
    SetSearchOpen:()=>null,
    SearchHandler :()=>null,
    searchItem:'',
    SetSearchtem:()=>null
})





export const  SearchContextProvider = ({children})=>{
    const [SearchValue,setSearch]= useState('');
    const [openS,SetSearchOpen]= useState(null);
    const user = useSelector(userSelectMemo);
    const [searchItem,SetSearchtem]=useState('')
    console.log(user);
    const dispatch = useDispatch();
    console.log(user);
    // const SearchHandler = (array=[],item={})=>{
    //   //find exsting item
    //  const exist =  array.find(itemindex=>{itemindex.id===item.id})
    //  if(exist){
    //   const newlyItem = {...item,quantity:item.quantity+1}
      
    //  }
    // }
    useEffect(()=>{
      console.log(SearchValue);
      user!==null&&user.search&&   dispatch( UploadUserDataStart({'recentSearch': 
      
      [...user.recentSearch,searchItem]},user));

    },[searchItem])
    console.log(SearchValue)
    const value = {SearchValue,setSearch,openS,SetSearchOpen,searchItem,SetSearchtem}
return (<searchContext.Provider value={value}>{children}</searchContext.Provider>)
}