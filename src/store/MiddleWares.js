export const custemMiddleWare = (state)=>(next)=>(action)=>{
    const {type,payload} = action;
    if(!type){
        console.log(action)
        return next(action)
    }
    console.log('type:' ,type);
    console.log('payload:' ,payload);
    console.log('currentState:',state.getState());
   
next(action)    
    console.log('nextState:',state.getState());
}
