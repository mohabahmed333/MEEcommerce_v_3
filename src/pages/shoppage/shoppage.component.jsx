import { Suspense, lazy, useEffect  } from 'react';
import{ Route,Routes ,useParams  } from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview-component/collection.preview.component';
 import './shoppage.component.scss'
import {FetchCategoriesStart} from '../../store/categories/category.action'
  import { useDispatch } from 'react-redux';
 import FooterSection from '../../components/footerSection/footer.component';
import SingleItem from '../../components/singleItem.component/singleItem.component';
import StoreModule from '../../components/newStore_module/storeModule';
   const ShopPage=()=>{
 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(FetchCategoriesStart())
    // ( async function GetCatogries(){
    // }())
    

},[])

return (
    <>
        {/* <div className="shop-header">
        <div className="backd"></div>
        <h1>shop</h1>
        </div> */}
     
     <Routes>
        <Route index element={ <CollectionPreview  />}/>
        <Route path=":cat"  element={ 
    <StoreModule/>

      }/>
        <Route path=':cat/:item'   element={
         <SingleItem/>
        
         } />

      </Routes>
      <FooterSection/>

    </>
    )

       
    
    
    }



export default ShopPage;
