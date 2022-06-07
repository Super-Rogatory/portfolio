import { NEXT_PAGE, PREV_PAGE, TOGGLE_POPUP } from "../actions/actionTypes";

export const toggleStatus = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_POPUP:
            return action.status;
        default:
            return state;
    }
};

export const nextTwoProjectsStatus = (state = false, action) => {
    switch(action.type) {
        case PREV_PAGE:
            return !action.status;
        case NEXT_PAGE:
            return !action.status;
        default:
            return state;             
    }
}