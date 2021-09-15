//when we choose template we have form and preview page
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DetailsCreator } from "../redux/actions/detailsActions";
import "./css/personalData.css";
import Preview from "./preview";
let PersonalDetails=()=>{
    //details vali state hai jo bni hai root reducer me redux me usko le aao
    //that is reducer ne jo change kia hai state me yha le aao ui pr dikhao changed state
    let details=useSelector((state)=>state.details);
    console.log(details);
    //yha poori details redux me save hoti rhegi or ab poore react app me ye detail use kr skte hai yehi redux ka kaam hai
    let {fname,lname,email,phone,city,state}=details;

    let history=useHistory();//isko use kia ki jb next pr jae toh ye qualification path pr le jae
    let dispatch=useDispatch();
    return(
        <>
        <div className="personal-container">
            <div className="personal-form">
                <h2 className="m-4">PersonalDetails</h2>
              <div class="row m-3">

                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({fname:e.currentTarget.value}))
                    }} value={fname} type="text" class="form-control" placeholder="First name" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({lname:e.currentTarget.value}))
                    }}value={lname} type="text" class="form-control" placeholder="Last name" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({email:e.currentTarget.value}))
                    }}value={email} type="email" class="form-control" placeholder="Email" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({phone:e.currentTarget.value}))
                    }}value={phone} type="number" class="form-control" placeholder="Phone" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({city:e.currentTarget.value}))
                    }}value={city} type="text" class="form-control" placeholder="City" />
                 </div>
                 <div class="col-5">
                    <input onChange={(e)=>{
                        dispatch(DetailsCreator({state:e.currentTarget.value}))
                    }}value={state} type="text" class="form-control" placeholder="State" />
                 </div>
        
                </div>
                <div onClick={()=>{
                    history.push("/qualifications");
                }} className="btn btn-primary m-4">Next</div>
            </div>

            <Preview/>

        </div>
        </>
    )
}
export default PersonalDetails;