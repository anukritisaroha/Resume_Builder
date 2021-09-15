import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Nav from "./components/nav";
import Home from "./components/home";
import { useEffect } from "react";
import {auth, firestore} from "./firebase"
import { useDispatch, useSelector } from "react-redux";
import { userCreator } from "./redux/actions/userActions";
import PersonalDetails from "./components/personalData";
import Qualifications from "./components/qualifications";
import Publicpreview from "./components/publicpreview";
let App=()=>{
  let dispatch=useDispatch();
  let state=useSelector((state)=>state);
  console.log(state);
  
  useEffect(()=>{
     //redux to save data
    let unsub=auth.onAuthStateChanged(async (user)=>{
      //redux use
      dispatch(userCreator(user));


       //to save data in firestore
       if(user){
       let{uid,email}=user;//ye dono chij li user se auth se aa gyi
       let docref=firestore.collection("users").doc(uid);
       let doc=await docref.get();
       if(!doc.exists){
           docref.set({
             email,
           })
       }

      }
    })
    return()=>{
      unsub();
    }
  },[]);
  return(
  <>
  {/* routing krte hai jisse hum sara data apna component ka app m dikha ske */}
  <Router>
    <Nav/>
    <Switch>
    <Route path="/publicpreview/:rid">
        <Publicpreview/>
      </Route>
      <Route path="/personal">
        <PersonalDetails/>
      </Route>
      <Route path="/qualifications">
         <Qualifications/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>
  
  </>)
}

export default App;
