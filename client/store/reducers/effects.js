import { NEXT_PAGE, PREV_PAGE, TOGGLE_MOBILE_NAV_POPUP, TOGGLE_POPUP } from "../actions/actionTypes";

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

export const toggleNavigationSideBar = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MOBILE_NAV_POPUP:
            return !action.status;
        default:
            return state;
    }
}