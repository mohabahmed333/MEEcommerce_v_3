import{compose,createStore,applyMiddleware} from 'redux';
import{ logger} from 'redux-logger';
import { combineReducer } from './root-reducer';
 import { persistStore,persistReducer } from 'redux-persist';
 import storageSession from 'redux-persist/es/storage/session'//middle ware the will run before any dispatch it consider one of the enhancing to use in project
// import { custemMiddleWare } from './MiddleWares';
// import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';
//inject saga middleWareFirst
 const sagaMiddleWare =createSagaMiddleWare();
 //replace thunk with saga;
const MiddleWares = [
    process.env.NODE_ENV !== 'production'&& logger,
    sagaMiddleWare,
].filter(Boolean);

// in order to use MiddleWare we have top applyMiddleware First
const persisitConfig ={
    key:'root',
    storage:storageSession,
    whitelist:[ 'Categories']
};
const composeEnhancer = 
(process.env.NODE_ENV !=="production"
&&
window
&&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)||compose
const persistedReducer = persistReducer(persisitConfig,combineReducer)
const enhancingMiddleWare = composeEnhancer(applyMiddleware(...MiddleWares));
//create store take three args 1 is the actual combaine store
//  2 is the additional initializing state 
// 3 is the Middlewares
//adding persist
export const  store = createStore(persistedReducer,undefined,enhancingMiddleWare);
// after store run
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store)
//without persiste
// export const  store = createStore(combineReducer,undefined,enhancingMiddleWare)