import React from "react";
import Layout from "../components/Layout";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    if(!auth.authenticate) {
        navigate('/sign-in');
    }

    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">Side bar</div>
                    <div className="col-md-10 content">Container</div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;