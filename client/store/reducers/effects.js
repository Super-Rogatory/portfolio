import { TOGGLE_POPUP } from "../actions/actionTypes";

export const toggleStatus = (state = false, action) => {
    switch(action.type) {
        case TOGGLE_POPUP:
            return action.status;
        default:
            return state;
    }
};