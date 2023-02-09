import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {

    const token = localStorage.getItem('token');

    if(token) {
        return <Component />
    } else {
        return <Navigate to="/sign-in" />
    }
};

export default PrivateRoute;