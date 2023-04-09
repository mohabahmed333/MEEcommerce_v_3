import{categoriesTypes} from './category.action.types'
const initializingState  = {
    categories:[],
    error:null,
    isLoading:false
}

export const categoriesReducer = (
    state=initializingState,
    action = {}
    )=>{
    const {type,payload} = action;
    switch(type){
        case categoriesTypes.FETCH_CATEGORIES_start:
            return{
                ...state,
                isLoading:true
            }
        case categoriesTypes.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                categories:payload,
                isLoading:false

            }
        case categoriesTypes.FETCH_CATEGORIES_FAILD:
            return{
                ...state,
                error:payload,
                isLoading:false

            }

            default: return state;

    }

}