import {authConstants} from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
    error: '',
    loading: false,
    message: '',
    signout: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true
            };

        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            };

        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };

        case authConstants.LOGOUT_REQUEST:
            return state = {
                ...initState,
                loading: true
            };

        case authConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                signout: true,
                authenticate: false
            };

        case authConstants.LOGOUT_FAILURE:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};

export default authReducer;