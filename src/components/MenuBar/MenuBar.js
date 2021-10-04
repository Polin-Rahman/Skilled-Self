import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="custom-nav-fix">
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand className="fs-3 fst-italic">Skilled-Self</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="mx-5">
                        <Nav className="me-auto my-2 my-lg-0">
                            <NavLink className="custom-nav-text" to='/home'>Home</NavLink>
                            <NavLink className="custom-nav-text" to='/about'>About</NavLink>
                            <NavLink className="custom-nav-text" to='/services'>Services</NavLink>
                            <NavLink className="custom-nav-text" to='/contact'>Contact</NavLink>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 w-100"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;