import { combineReducers } from "redux";
import uiSlice from "../slices/uiSlice";
import dataSlice from "../slices/dataSlice";

const rootReducer = combineReducers({
    data: dataSlice,
    ui: uiSlice
})

export default rootReducer