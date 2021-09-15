import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DetailsCreator } from "../redux/actions/detailsActions";
import Preview from "./preview";
import "./css/qualifications.css"
import { Saveresume } from "../redux/actions/saveActions";

let Qualifications=()=>{
    let history=useHistory();
    let dispatch=useDispatch();
    let{degree,college,cgpa,year,isPublic}=useSelector((state)=>state.details);
    //this id of resume so that we can generate link for particular resume

    let{id}=useSelector((state)=>state.saveState);

 
    //ye save krne ke liye details
    let details=useSelector((state)=>state.details);
    let code=useSelector((state)=>state.template);
    let{uid}=useSelector((state)=>state.user);
    
    
   return(
       <>
       <div className="qual-container">
            <div className="qual-form">
                <h2 className="m-4">Qualifications Details</h2>
              <div class="row m-3">

                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({degree:e.currentTarget.value}))
                    }} value={degree} type="text" class="form-control" placeholder="degree" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({college:e.currentTarget.value}))
                    }}value={college} type="text" class="form-control" placeholder="college" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({cgpa:e.currentTarget.value}))
                    }}value={cgpa} type="number" class="form-control" placeholder="cgpa" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({year:e.currentTarget.value}))
                    }}value={year} type="number" class="form-control" placeholder="year of grad" />
                 </div>
                 <div class="form-check m-4">
                   <input class="form-check-input" type="checkbox" 
                   checked={isPublic}
                   onClick={(e)=>{
                    dispatch(DetailsCreator({isPublic:e.currentTarget.checked}))
                   }}
                   id="flexCheckDefault"/>
                   <label class="form-check-label" for="flexCheckDefault">
                   Make Public
                   </label>
                </div>
                
        
                </div>
                <div onClick={()=>{
                    history.push("/personal");
                }} className="btn btn-primary m-4">Back</div>
               
            </div>

            <Preview/>

        </div>
        <button className="btn btn-primary qual-gen" onClick={()=>{

            alert(`localhost:3000/publicpreview/${id}`);
           

        }}>Generate link</button>
        <button className="btn btn-primary qual-save" onClick={()=>{
            //thunk ke action ko yha dispatch krenge
            dispatch(Saveresume(uid,details,code));
        }}>Save to datatbase</button>
       </>
   )
};
export default Qualifications;