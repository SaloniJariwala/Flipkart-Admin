import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Signin from "./pages/signin";
import Home from "./pages/Home";
import Signup from "./pages/signup";
import "./assets/scss/index.scss";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<PrivateRoute Component={Home}/>}/>
                <Route path="/sign-in" element={<PublicRoute Component={Signin} />}/>
                <Route path="/sign-up" element={<PublicRoute Component={Signup} />}/>
            </Routes>
        </div>
    );
}

export default App;
