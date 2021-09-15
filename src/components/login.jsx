import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
let Login=()=>{
  //when we click on signup or login the same page should open toh use usehistory
    let history= useHistory()
    let user=useSelector((state)=>state.user);
    let [password,setPassword]=useState("");
    let [email,setemail]=useState("");
    return (
    <>
    {user? <Redirect to="/home"/>:""};
    <div className="row">
      {/* we use offset to bring col in center prop of bootstrap 4 col chod deta hai */}
      <div className="col-4 offset-4" >
        <h1 className="mt-4 mb-4">LOGIN</h1>
     
        <form className="mt-4">
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={email}
             onChange={(e)=>{
               setemail(e.currentTarget.value);
             }}
            class="form-control" id="exampleInputEmail1"/>
          
          </div>
         <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Password</label>
           < input type="password"
           value={password}
           onChange={(e)=>{
             setPassword(e.currentTarget.value);
           }} class="form-control" id="exampleInputPassword1"/>
         </div>
         
         <button 
                onClick={(e)=>{
                    // it prevent the the page from reload (default behaviour of button click is to reload page)
                    e.preventDefault(); 
                    auth.signInWithEmailAndPassword(email,password);

                }}
                type="submit" 
            class="btn btn-primary">LogIn</button>
         

         <br />
         <br />
         <button type="submit" onClick={()=>{
           history.push("/signup");
         }} class="btn btn-primary">Signup</button>
        </form>
     </div>
   </div>
  </>
)}
export default Login;