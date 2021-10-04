import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';
import headerImg from '../../images/header.jpg';

const MenuBar = () => {
    //header component with navbar
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="custom-nav">
                <Container fluid>
                    <Navbar.Brand className="fs-3 fst-italic">Skilled-Self</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="mx-5">
                        <Nav className="me-auto my-2 my-lg-0">
                            <NavLink className="custom-nav-text" to='/home'>Home</NavLink>
                            <NavLink className="custom-nav-text" to='/about'>About Us</NavLink>
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
            <div className="header-container">
                <div className="row my-3">
                    <div className="col-md-6">
                        <h1 className="text-end fst-italic mt-5">Skilled-Self</h1>
                        <p className="text-end fst-italic fs-4">Learn something new and Grow your skills!</p>
                    </div>
                    <div className="col-md-6">
                        <img className="header-img" src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MenuBar;