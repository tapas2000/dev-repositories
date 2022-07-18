import { types } from "../types/types";

const initialState = {
    name: "",
    nickname: "",
    isAuthenticated: false,
    email: null,
};
export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authLogIn:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            }
        case types.authLogOut:
            return initialState;
        default:
            return state;
    }

}