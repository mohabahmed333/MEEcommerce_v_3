import { Button, Drawer } from 'antd';
import { useState ,useContext,useEffect} from 'react';
import { searchContext } from '../../contexts/searchContext';
import './search.scss'
import { useSelector } from 'react-redux';
import { CatougriesSelector } from '../../store/categories/category.selector';
import { useEffectOnce } from 'react-use';
import { Navigate, useNavigate } from 'react-router-dom';
import { handleRouteGuide } from '../../componentsutlts/handleRouteGuide';
import Modal from 'antd/es/modal/Modal';
import { userSelectMemo } from '../../store/user/user.selector';
const SearchDrawer = () => {
  const {openS,SetSearchOpen,setSearch,SearchValue,SetSearchtem} = useContext(searchContext);
  const categoriesItems = useSelector(CatougriesSelector);
   const [categoriesTitle,SetCategoriesTitle]=useState([]);
   const [categories,SetCategories]=useState([]);
   const [itemName ,SetItemName]=useState('');
   const user = useSelector(userSelectMemo);
   const navigate = useNavigate()
  const showDrawer = () => {
    SetSearchOpen(true);
  };
  const onClose = () => {
    SetSearchOpen(false);
  };
  console.log(categories);

  const searchStart = (e)=>{
    e.preventDefault()
 console.log(SearchValue);
  navigate(`/search/${SearchValue}`)
  SetSearchOpen(false);
  setSearch('');
    };
    const HandleChange=(e)=>{
      setSearch(e.target.value)
      // Object.keys(categoriesItems).length!==0&&  SetCategoriesTitle(Object.keys(categories));
      // console.log(categoriesTitle);
      // if(Object.keys(categoriesItems).length>0){

      //     const CateggoriesAfterFiltered= Object.keys(categoriesItems).map(categortitle=>{
      //       return categoriesItems[categortitle]
      //  })
      //  SetCategories(CateggoriesAfterFiltered)
      // }
      if(SearchValue !=='' &&
       Object.keys(categoriesItems).length>0){

          const CateggoriesAfterFiltered= Object.keys(categoriesItems).map(categortitle=>{
          
          const filterd = categoriesItems[categortitle].filter(item=>item.name.toUpperCase().trim()
          .includes(SearchValue.toUpperCase().trim()) );
          
          return filterd
          //   return catogriesItems[categortitle].filter(item=>item.name.toUpperCase().trim().includes(catSearch.toUpperCase().trim()) )
          })
           SetCategories(CateggoriesAfterFiltered )
      
      }
    } 
    // useEffect(()=>{
     
    // },[])
    // useEffect(()=>{
    
   
    // },[SearchValue])
  return (
    <>
  
      <Modal footer={null}   title='search' style={{display:'flex',justifyContent:'space-between'}} placement="top" onCancel={()=>{SetSearchOpen(false) ; setSearch('')}} open={openS}>
     
     <div className="search_wrapper">
<form >
      <input class="form-control me-2" 
                      placeholder="search products"
                      onChange={HandleChange}
                      type="search"
                       style={{
                        background:'#dddddd47',
                      border:'1px solid #ddd',
                      width:'62%',marginLeft:'auto'}}
                       aria-label="Search" value={SearchValue}/>
  
                       <button type='submit' onClick={searchStart} style={{width:'fit-content !important'}}
                        className='flex justify-content-between align-items-center w-20'>  <i class="fa-solid fa-magnifying-glass"></i> </button>
                       
             {SearchValue !==''&& <ul class='recently_search'>
                {categories.map(item=>{
                return   item.map(itemE=>{
               
                     return  (<li key={itemE.name} class='recently_item' onClick={()=>{
                        handleRouteGuide(categoriesItems,navigate,itemE.name);
                        SetSearchOpen(false);
                        SetSearchtem(itemE.name)
                     }}>{itemE.name}</li>)
                   })
               })}
               </ul> 
             }       
                       </form>
                          </div>
                          <div className="recentlysearch">
  <h6 className='text-center'><p>recently search Items</p> 
   <Button type="text"  style={{display:'flex',alignItems:'center'}} > View History 
   <i className="fa-solid fa-arrow-right ms-3"></i></Button> </h6>
 <ul className='recently_search_item' style={{maxHeight:'300px',overflow:'auto'}}>
  {user&&user.recentSearch&&
  user.recentSearch.reverse().filter((item,idx)=>idx<5).map(s=>{
    return(
<li onClick={()=>{navigate(`/search/${s}`) ; SetSearchOpen(false) }}
 className='recently_item justify-content-between d-flex align-items-center' >
  {s}   <i className="fa-solid fa-magnifying-glass me-2"></i>
 </li>
    )
  })
  }
 
  </ul>
 </div>
<div className='categories'>
  
<h6  >Top collection</h6>
    {Object.keys(categoriesItems).map(title=>{
        return(
            <>
        
            <p key={title} className='catItem' onClick={()=>{navigate(`/shop/${title}`) ;
              SetSearchOpen(false);}}>{title} </p >
            </>
        )
    })}
</div>

      </Modal>
    </>
  );
};
export default SearchDrawer;