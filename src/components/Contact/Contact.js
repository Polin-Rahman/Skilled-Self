import React from 'react';
import './Contact.css';
import contactImg from '../../images/contact.jpg';

const Contact = () => {
    //contact component
    return (
        <div className="contact-containar">
            <div>
                <img src={contactImg} alt="" />
            </div>
            <div className="contact-steps-texts">

                <div className="contact-steps">
                    <h2>Join with Us</h2>
                    <p><i class="fas fa-arrow-right"></i> Create Account</p>
                    <p><i class="fas fa-arrow-right"></i> Join Membership</p>
                    <p><i class="fas fa-arrow-right"></i> Start Learning</p>
                    <p><i class="fas fa-arrow-right"></i> Get Certificate</p>
                </div>

                <div className="contact-steps">
                    <h2>Contact with Us</h2>
                    <p className="text-center"><i class="fas fa-phone-alt"></i> Call : + 000 123 66 99</p>
                    <p className="text-center"><i class="fas fa-at"></i> Email :  skilled.self@hmail.com</p>
                </div>
            </div>
        </div >
    );
};

export default Contact;