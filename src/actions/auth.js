import Swal from "sweetalert2";
import { END_POINT_AUTH_LOGIN, END_POINT_AUTH_SIGIN } from "../constants/apis";
import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const login = (user) => {
    return async (dispatch) => {
        Swal.showLoading();
        const resp = await fetchWithoutToken(END_POINT_AUTH_LOGIN, user, 'POST');
        const body = await resp.json();

        console.log(resp.status);

        Swal.hideLoading();
        if (resp.status === 200) {
            const { name, nickname, email } = body.searchedUser;
            localStorage.setItem('token', body.token);
            localStorage.setItem('user', body.searchedUser);
            Swal.fire('Success', body.msg);
            dispatch(loginObject(name, nickname, email));
        } else {
            Swal.fire('Error', body.msg ? body.msg : "None field should be empty");
        }
    }
}

export const register = (newUSer) => {

    return async (dispatch) => {
        Swal.showLoading();
        const resp = await fetchWithoutToken(END_POINT_AUTH_SIGIN, newUSer, 'POST');
        const body = await resp.json();

        Swal.hideLoading();
        console.log(resp, body);
        if (resp.status === 201) {
            Swal.fire('Success', body.msg);
        } else {
            Swal.fire('Error', body.msg ? body.msg : "None field should be empty");
        }
    }
}

const loginObject = (name, nickname, email) => ({
    type: types.authLogIn, payload: {
        name,
        nickname,
        email
    },
})


export const logout = () => ({ type: types.authLogOut })
