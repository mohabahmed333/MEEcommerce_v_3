import {combineReducers} from 'redux';
import{UserReduser} from './user/user.reducer';
import{categoriesReducer} from'./categories/category.reducer';
import{CartReducer} from './cart/cart.reducer'
 export const combineReducer = combineReducers({
    user:UserReduser,
    Categories:categoriesReducer,
    cart:CartReducer 
 });

