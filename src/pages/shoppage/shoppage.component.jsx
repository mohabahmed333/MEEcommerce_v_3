import {useContext, useEffect  } from 'react';
import{Link, Route,Routes ,useParams  } from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview-component/collection.preview.component';
 import './shoppage.component.scss'
import {fetchCategoriesAsync, FetchCategoriesStart} from '../../store/categories/category.action'
import Categories from '../../components/Categories/categories.component';
import { SingleItem } from '../../components/singleItem.component/singleItem.component';
 import { useDispatch } from 'react-redux';
import { categoriesTypes } from '../../store/categories/category.action.types';
import FooterSection from '../../components/footerSection/footer.component';
import { searchContext } from '../../contexts/searchContext';
import { CollectonShop } from '../../components/collectionOfShop/collectionShop';

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
        <Route path=":cat"  element={ <Categories/>}/>
        <Route path=':cat/:item'   element={<SingleItem/>} />

      </Routes>
      <FooterSection/>

    </>
    )

       
    
    
    }



export default ShopPage;
