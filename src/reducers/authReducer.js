import { types } from "../types/types";

const initialState = {
    isAuthenticated: false,
    email: null,
    password: null
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