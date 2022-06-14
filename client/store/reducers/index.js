import { combineReducers } from "redux";
import { nextTwoProjectsStatus, toggleNavigationSideBar, toggleStatus } from "./effects";

const rootReducer = combineReducers({
    openPopup: toggleStatus,
    showNextTwoProjects: nextTwoProjectsStatus,
    openNavSideBar: toggleNavigationSideBar
});

export default rootReducer;