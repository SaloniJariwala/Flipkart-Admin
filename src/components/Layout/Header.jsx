import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../actions";

const Header = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const renderNotLoggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <NavLink to='/sign-in' className="links">Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/sign-up' className="links">Sign Up</NavLink>
                </li>
            </Nav>
        )
    };

    const renderLoggedInUser = () => {
        return (
            <Nav >
                <li className="nav-item">
                    <span className="links" onClick={() => dispatch(signOut())}>Sign Out</span>
                </li>
            </Nav>
        )
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container>
                <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                    {auth.authenticate ?
                        renderLoggedInUser() :
                        renderNotLoggedInLinks()
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;