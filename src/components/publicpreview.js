import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";
import "./css/preview.css"


let Publicpreview=()=>{
    //yha hme sare paramaters milte 
    let{rid}=useParams();
    let[previewdata,setPreviewdata]=useState(null);

    useEffect(()=>{
      //yha pr rid ke corresponding jo bhi data hoga code uid details sb mil jaega
      //doc rid get ho gyi toh then chlega
      firestore.collection("resume").doc(rid).get().then((doc)=>{
         let data=doc.data();
         setPreviewdata(data);
      })
    },[]);
    return(
       

        <>
        {
            //{/* preview ki styling le aao toh isse jo bhi data aaya firestore se preview format me dikhega */}
            previewdata ?  
            <p className={`template-${Publicpreview.code}`}>
                {/* publicpreview me resume ka sara data hai */}
                {previewdata.details.fname}
            </p>:""
        }
   
     
    
        </>
    )
};
export default Publicpreview;