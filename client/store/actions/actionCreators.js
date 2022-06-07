import { TOGGLE_POPUP, PREV_PAGE, NEXT_PAGE } from "./actionTypes";

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