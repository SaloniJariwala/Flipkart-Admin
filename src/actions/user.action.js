import {registrationConstant} from "./constants";
import axiosInstance from "../helpers/axios";

export const signup = (user) => {

    return async (dispatch) => {
        dispatch({
            type: registrationConstant.SIGNUP_REQUEST
        });
        await axiosInstance.post('/admin/sign-up', user)
            .then((response) => {
                const {message} = response.data;
                dispatch({
                    type: registrationConstant.SIGNUP_SUCCESS,
                    payload: {
                        message
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: registrationConstant.SIGNUP_FAILURE,
                    payload: {error: error.response.data.error}
                })
            });
    }
};