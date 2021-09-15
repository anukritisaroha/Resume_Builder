//special actions for thunk they dont return obj they return a functn

import { firestore } from "../../firebase";

//below are normal actions
export const Saveloading=()=>{
    return{
        type:"Save_Resume",
    }
};

export const Saveerror=(err)=>{
    return{
        type:"Save_Err",
        payload:err,
    }
};

export const Savecompleted=(id)=>{
    return {
        type:"Save_completed",
        payload:id,
    }
}
//this is special action given to thunk then thunk go to api perform asyn work 
//then normal actions works go to reducers and change state
export const Saveresume=(uid,details,code)=>{//ye parameters ka data hmesha jb hum dispatch krte hai tb mil jaega
    return (dispatch)=>{
        dispatch(Saveloading());

        //firestore ke collection me jao or resume ki sari chij save kralo
        firestore.collection("resume").add({
            uid,
            details,//user details personal,quali
            code,//template konsi hai vo code
        }).then((docRef)=>{
            return docRef.get();
            //add chla to then me aa gya ki uid hai details hai

        }).then((doc)=>{
            //jb docref ki details get ho gyi toh save completed
            dispatch(Savecompleted(doc.id))
            

        }).catch((err)=>{
            dispatch(Saveerror(err));//uper ke nrml function in dispatch se chlenge thunk execute krega 
        }
        )
    }
}
//save resume jo action hai ab vo hum dispatch krenge khi or in qualification.jsx