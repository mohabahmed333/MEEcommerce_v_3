import { createSelector } from "reselect";
const ErorMessage = (state)=>{
  return state
}
  const selectUSer = (state)=>  {
     return state.user}  ;
     
     export const userSelectMemo = createSelector([selectUSer],(user)=>user.currentUser);
     export const selectImageUser =  createSelector([userSelectMemo],(user)=>user.imageUrl);
     export const ErrorMessageSelector = createSelector([ErorMessage],(state)=>state)