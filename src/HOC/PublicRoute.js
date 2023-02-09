import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ Component }) => {

    const token = localStorage.getItem('token');

    if(!token) {
        return <Component />
    } else {
        return <Navigate to="/" />
    }
};

export default PublicRoute;