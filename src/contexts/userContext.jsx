import { createContext,useState,useEffect, useReducer } from "react";
import { GetUserAuthStateReducer } from "../firebase/firebase.utls";
import { GetUserFromDocs } from "../firebase/firebaseMtethods/connectuserToDocs";
//actually value you want to acces ;

export const userContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null
});
const custom_actions  ={
    SET_USER_STATUS:'SET_USER_STATUS'
}
const userReduser =(state,action)=>{
    const {type,payload} = action;
     switch(type){
        case 'SET_USER_STATUS':
            return{
                ...state,
                currentUser:payload
            }  

        default:
            throw new Error(`unhandle action ${type}`)
    }

}

//provider


export const UserProvider = ({children})=>{
    // const[currentUser,setCurrentUser]= useState(null);
    const initializingState = {
        currentUser:null
    }
    const [{currentUser},dispatch] = useReducer(userReduser,initializingState);
     const setCurrentUser = (user)=>{
        dispatch({type:custom_actions.SET_USER_STATUS,payload:user})
     }

    useEffect(()=>{
      const subscription=   GetUserAuthStateReducer((user)=>{
            if(user){
                GetUserFromDocs(user)
            }
            setCurrentUser(user)
          });
          return subscription
    },[])

    const value = {currentUser,setCurrentUser}
    return <userContext.Provider value={value}>{children}</userContext.Provider>
}