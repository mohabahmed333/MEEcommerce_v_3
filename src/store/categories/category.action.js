import { GETCollection } from '../../firebase/firebaseMtethods/addCollectionAndDocuments'
import {CreateAction} from '../utl/createAction'
import {categoriesTypes} from './category.action.types'
export const FetchCategoriesStart  = ()=> CreateAction(categoriesTypes.FETCH_CATEGORIES_start)
export const FetchCategoriesSuccess  = (cat)=> CreateAction(categoriesTypes.FETCH_CATEGORIES_SUCCESS ,cat)
export const FETCHCATEGORIESFAILD  = (err)=> CreateAction(categoriesTypes.FETCH_CATEGORIES_FAILD,err)

export const fetchCategoriesAsync = ()=> async(dispatch)=>{
    dispatch(FetchCategoriesStart())
    try{
        const catogries = await  GETCollection();
        dispatch(FetchCategoriesSuccess(catogries))
        
    }
    catch(err){
        dispatch(FETCHCATEGORIESFAILD(err))

    }
}
