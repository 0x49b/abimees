import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {authActions} from '_store';
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler} from "reactstrap";

export {TopNav};

function TopNav(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const authUser = useSelector(x => x.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show nav when logged in
    if (!authUser) return null;

    return (
        <Navbar {...args}>
            <NavbarBrand href="/">abimees</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/clients" className="nav-item nav-link">Clients</NavLink>
                </Nav>
                <NavbarText>
                    <Button outline size={"sm"} color={"info"} onClick={logout}>logout</Button>
                </NavbarText>
            </Collapse>
        </Navbar>
    );
}