//to save details in redux
export const DetailsCreator=(details)=>{
    return {
        type:"SET_DETAILS",
        payload:details,
    }
}