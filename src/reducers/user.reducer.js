import {registrationConstant} from "../actions/constants";

const initState = {
    error: '',
    message: '',
    loading: false,
    success: false
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case registrationConstant.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };

        case registrationConstant.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                success: true
            };

        case registrationConstant.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};

export default userReducer;