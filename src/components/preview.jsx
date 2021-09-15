import { useSelector } from "react-redux";
import "./css/preview.css"
let Preview=()=>{
    //preview me konsi template select ki hai or kya details dikhani hai useselector se vo dono state le aao 
    //info redux me save hai mystore jo index.js me bna hai
    let {fname,lname,email,phone,city,state,degree,college,cgpa,year}=useSelector((state)=>state.details);
    let templatecode=useSelector((state)=>state.template);
    return(
        <>
        <div className="preview-container">
            {/* to show css in preview */}
            <p className={`template-${templatecode}`}>
                {fname}
            </p>
            <p className={`template-${templatecode}`}>
                {lname}
            </p>
            <p className={`template-${templatecode}`}>
                {email}
            </p>
            <p className={`template-${templatecode}`}>
                {phone}
            </p>
            <p className={`template-${templatecode}`}>
                {city}
            </p>
            <p className={`template-${templatecode}`}>
                {state}
            </p>
            <p className={`template-${templatecode}`}>
                {degree}
            </p>
            <p className={`template-${templatecode}`}>
                {college}
            </p>
            <p className={`template-${templatecode}`}>
                {cgpa}
            </p>
            <p className={`template-${templatecode}`}>
                {year}
            </p>
        </div>
        </>

    )
};
export default Preview;