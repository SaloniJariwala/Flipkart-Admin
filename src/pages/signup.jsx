import React, {useState} from "react";
import Layout from "../components/Layout";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Input from "../components/UI/Input";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../actions";
import {useNavigate} from "react-router-dom";

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signup({
            firstName,
            lastName,
            email,
            username,
            password
        }));
    };

    if(user.success) {
        navigate('/sign-in');
    }

    return (
        <Layout>
            <Container>
                <Row style={{marginTop: 50}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label='First Name'
                                        placeholder='First Name'
                                        value={firstName}
                                        type='text'
                                        onChange={(event) => setFirstName(event.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label='Last Name'
                                        placeholder='Last Name'
                                        value={lastName}
                                        type='text'
                                        onChange={(event) => setLastName(event.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label='Email'
                                placeholder='Email'
                                value={email}
                                type={'email'}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Input
                                label='Username'
                                placeholder='Username'
                                value={username}
                                type={'text'}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label='Password'
                                        placeholder='Password'
                                        value={password}
                                        type='password'
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label='Confirm Password'
                                        placeholder='Confirm Password'
                                        value={cpassword}
                                        type='password'
                                        onChange={(event) => setCpassword(event.target.value)}
                                    />
                                </Col>
                            </Row>
                            {user.error && (
                                <p style={{color: 'red'}}>{user.error}</p>
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

export default Signup;