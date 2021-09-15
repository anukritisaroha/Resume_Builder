let initialState={
    //things included in personal details
    fname:"",
    lname:"",
    email:"",
    phone:"",
    city:"",
    state:"",
    //things included in qualifications details component
    degree:"",
    college:"",
    cgpa:"",
    year:"",
    //for male public
    isPublic:false,

}
let DetailsReducer=(state=initialState,action)=>{
   switch(action.type){
       case "SET_DETAILS":
           return {...state,...action.payload};
        default:
            return state;
   }
}
export default DetailsReducer;