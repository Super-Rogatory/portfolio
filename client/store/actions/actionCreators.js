import { TOGGLE_POPUP } from "./actionTypes";

export const togglePopup = (status) => {
    return {
        type: TOGGLE_POPUP,
        status
    }
};