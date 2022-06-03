import { combineReducers } from "redux";
import { toggleStatus } from "./effects";

const rootReducer = combineReducers({
    openPopup: toggleStatus
});

export default rootReducer;