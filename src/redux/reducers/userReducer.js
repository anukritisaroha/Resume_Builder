let userReducer=(state=null,action)=>{
   switch(action.type){
       case "SET_USER":
         return action.payload;
       default:
           return state;
   }
}
export default userReducer;
//action ho gye reducer ho gye ab jake store bnao index.js me jisme reducer state change krega