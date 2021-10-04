import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    //footer component
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-md-5">
                    <h5 className="text-center">Do You Have Queries ?</h5>
                    <p className="text-center"><small>We'll help you to grow your career.Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month!</small></p>
                    <p className="text-center"><i class="fas fa-phone-alt"></i> Call us : + 000 123 66 99</p>
                    <p className="text-center"><small>All rights reserved by ©  Skilled-Self</small></p>
                </div>
                <div className="col-md-3">
                    <ul className="text-center">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5 className="text-center">Sign up for the newsletter</h5>
                    <FormControl
                        type="search"
                        placeholder="Enter Email"
                        className="mx-auto w-75"
                    />
                    <Button variant="btn btn-success" className="footer-btn">Suscribe</Button>
                </div>
            </div>
        </div >
    );
};

export default Footer;