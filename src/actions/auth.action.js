import {authConstants} from "./constants";
import axiosInstance from "../helpers/axios";

export const login = (user) => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST
        });
        await axiosInstance.post('/admin/sign-in', user)
            .then((result) => {
                const { token, user } = result.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: error.response.data.message }
                })
            });
    }
};

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "Failed to login" }
            })
        }
    }
};

export const signOut = () => {
    return async dispatch => {

        dispatch({
            type: authConstants.LOGOUT_REQUEST
        });

        const token = await localStorage.getItem('token');

        await axiosInstance.post('/admin/sign-out', { headers: { authorization: `Bearer ${token}` } })
            .then((response) => {
                if(response.status === 200){
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    dispatch({
                        type: authConstants.LOGOUT_SUCCESS
                    })
                }
            })
            .catch((error) => {
                debugger
                dispatch({
                    type: authConstants.LOGOUT_FAILURE,
                    payload: { error: error.response.data.error }
                })
            });
    }
};
