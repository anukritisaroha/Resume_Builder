import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateaction";
import "./css/home.css";
let Home=()=>{
    //use selector used on state made in index.js and changes in state done by reducer
    let user=useSelector((state)=>state.user);
    let history=useHistory();
   
    let dispatch=useDispatch();
    return (
    <>
    {user?"":<Redirect to="/login"/>}

    {/* user agr hai usko sidha template dikha do */}
    <div className="template-container">
        <div onClick={()=>{
            dispatch(templateCreator("A"))
            //after we choose template redirect to comp. of personal details
            history.push("/personal");
        }} className="template">
            {/* add link to add template image that is in public  */}
            <img src="http://localhost:3000/skin1.svg" alt="" />
        </div>
        <div onClick={()=>{
            dispatch(templateCreator("B"))
            history.push("/personal");
        }}  className="template">
            <img src="http://localhost:3000/skin2.svg" alt="" />
        </div>
    </div>
    


    
   <button class="btn-primary home-logout-btn" onClick={()=>{
       auth.signOut();
   }}>Logout</button>
    </>
)};
export default Home;