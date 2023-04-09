import { OnAuthChangesAsync } from "../../firebase/firebase.utls";
import { GETCollection } from "../../firebase/firebaseMtethods/addCollectionAndDocuments";
import { GetUserFromDocs } from "../../firebase/firebaseMtethods/connectuserToDocs";
import { userSelectMemo } from "../user/user.selector";
import { FETCHCATEGORIESFAILD, FetchCategoriesSuccess } from "./category.action";
import{categoriesTypes} from './category.action.types'
import{all,call,put,takeLatest} from 'redux-saga/effects'
import { useSelector } from 'react-redux';

 
function* FetchCategorySagaAsync({payload}){
 
        const catogries = yield  call(GETCollection);
    
    
       
       

//  const categoriesAfterMaping = catogries.map(item=>{
//     const {items}= item;
//     items.map(cateItem=>{
//         wishList.map(wishItem=>{
//    if(cateItem.id ===wishItem.id){
//     console.log(true);
//    }else{
//     console.log(false);

//   }
//         })
        
//     })
//     }) 
try{

    yield put(FetchCategoriesSuccess(catogries))
}
    
    catch(err){
         yield put(FETCHCATEGORIESFAILD(err))

    }
}
function* OnFetchSaga( ){
     yield takeLatest(categoriesTypes.FETCH_CATEGORIES_start,FetchCategorySagaAsync)
}

export  function* categorySaga (){
    yield all([call(OnFetchSaga)])
}


