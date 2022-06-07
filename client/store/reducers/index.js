import { combineReducers } from "redux";
import { nextTwoProjectsStatus, toggleStatus } from "./effects";

const rootReducer = combineReducers({
    openPopup: toggleStatus,
    showNextTwoProjects: nextTwoProjectsStatus
});

export default rootReducer;