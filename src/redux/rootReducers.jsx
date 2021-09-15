//to combine to reducers so that in index we can use 2 reducer to create store
import { combineReducers } from "redux";
import DetailsReducer from "./reducers/detailsReducer";
import { Savereducers } from "./reducers/saveReducer";
import templateReducer from "./reducers/templatereducer";
import userReducer from "./reducers/userReducer";

let rootReducer=combineReducers({
    template:templateReducer,
    user:userReducer,
    details:DetailsReducer,
    saveState:Savereducers,
})
export default rootReducer;