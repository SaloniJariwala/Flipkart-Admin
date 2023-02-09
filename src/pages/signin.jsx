import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import Input from "../components/UI/Input";
import {login} from "../actions/index";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({
            email,
            password
        }));
    };

    if(auth.authenticate) {
        navigate('/');
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: 50 }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                label='Email'
                                placeholder='Email'
                                value={email}
                                type={'email'}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <Input
                                label='Password'
                                placeholder='Password'
                                value={password}
                                type='password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            {auth.error && (
                                <p style={{ color: 'red' }}>{auth.error}</p>
                            )}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Signin;