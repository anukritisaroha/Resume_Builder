import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

let SignUp=()=>{
   let history= useHistory()
   let [password ,setPassword]=useState("");
   let [confirmPassword ,setconfirmPassword]=useState("");
   let [email ,setemail]=useState("");
   let user=useSelector((state)=>state.user);
   //use these states now inside div so that onchange input it saves to state 
    return (
    <>
    {user?<Redirect to="/home"/>:""};
    <div className="row">
      {/* we use offset to bring col in center prop of bootstrap 4 col chod deta hai */}
      <div className="col-4 offset-4" >
        <h1 className="mt-4 mb-4">Sign Up!</h1>
     
        <form className="mt-4">
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>

            <input type="email"
             value={email}
             onChange={(e)=>{
               setemail(e.currentTarget.value);
             }}
             class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
          </div>
         <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Password</label>
           < input type="password" value={password}
             onChange={(e)=>{
               setPassword(e.currentTarget.value);
             }} class="form-control" id="exampleInputPassword1"/>
         </div>
         <div class="mb-3">
           <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
           < input type="password"  value={confirmPassword}
             onChange={(e)=>{
               setconfirmPassword(e.currentTarget.value);
             }}
            class="form-control" id="exampleInputPassword2"/>
         </div>
      
         <button  onClick={(e)=>{
           e.preventDefault();
           if(password===confirmPassword){
             //database me create ho jaega user with email and pass on signup 
             auth.createUserWithEmailAndPassword(email,password);
           }
         }} class="btn btn-primary">Signup</button>
         <br />
         <br />
         <button onClick={()=>{
           history.push("/login");
         } } type="submit"  class="btn btn-primary">Login</button>
        </form>
     </div>
   </div>
    </>
)}
export default SignUp;