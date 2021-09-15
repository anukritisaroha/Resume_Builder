let initialState={
    loading:null,
    err:null,
    id:"",
}
export const Savereducers=(state=initialState,action)=>{
  switch(action.type){
      case "Save_Resume":
          return {...state,loading:true}
      case "Save_Err":
          return {...state,loading:false,err:action.payload,}

      case "Save_completed":
         return{
            ...state,loading:false,
            id:action.payload,
          
         }
     default:
        return state;
        
  }

}

