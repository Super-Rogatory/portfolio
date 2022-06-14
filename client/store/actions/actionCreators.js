import { TOGGLE_POPUP, PREV_PAGE, NEXT_PAGE, TOGGLE_MOBILE_NAV_POPUP } from "./actionTypes";

export const togglePopup = (status) => {
    return {
        type: TOGGLE_POPUP,
        status
    }
};

export const forwardPage = (direction) => {
    return {
        type: NEXT_PAGE,
        status: direction
    }
}

export const rewindPage = (direction) => {
    return {
        type: PREV_PAGE,
        status: direction
    }
}

export const toggleMobileNavPopup = (status) => {
    return {
        type: TOGGLE_MOBILE_NAV_POPUP,
        status
    }
}