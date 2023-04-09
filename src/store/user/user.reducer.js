 import { USERTYPES } from "./user.types";
const initializingState = {
 currentUser:null,
 loading:false,
 error:null
}
export const UserReduser = (state = initializingState,action)=>{
 const {type,payload} = action;
 switch(type){
     case USERTYPES.CHECK_USER_SESSION:
         return{
             ...state,
              loading:true,

         }  
     case USERTYPES.SIGN_IN_SUCCESS:
         return{
             ...state,
             currentUser:payload,
             loading:false,

         }  
     case USERTYPES.SIGN_IN_FAIID:
         return{
             ...state,
             error:payload,
             loading:false,

         }  
    case USERTYPES.SIGN_OUT:
        return{
        ...state,
        currentUser:null
    }
    case USERTYPES.UploadUserImageSuccess:
      return  {...state,
            currentUser:payload
        }

        case USERTYPES.UploadUserDataSuccess:
            return  {...state,
                currentUser:payload
            }
        case USERTYPES.SIGN_IN_FAIID:
            console.log(payload)
          return  {...state,
            error:payload
            }
     default :return state ;

  }

}