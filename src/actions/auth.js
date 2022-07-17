import { types } from "../types/types";

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginObject(email, password));
    }
}

export const loginObject = (email, password) => ({
    type: types.authLogIn, payload: {
        email,
        password
    },
})

export const logout = () => ({ type: types.authLogOut })
