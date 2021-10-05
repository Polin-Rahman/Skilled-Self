import React from 'react';
import './Contact.css';
import contactImg from '../../images/contact.jpg';

const Contact = () => {
    //contact component
    return (
        <div >
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
            </div>

            <div className="w-50 mx-auto my-5">
                <h3 className="text-center my-5">Create your account</h3>

                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomUsername" className="form-label">Email</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom03" className="form-label">Address</label>
                        <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom04" className="form-label">Select course</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Courses</option>
                            <option>Microsoft Excel</option>
                            <option>Adobe Illustrator</option>
                            <option>Public Speaking</option>
                            <option>Time Management</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom05" className="form-label">Comments</label>
                        <input type="text" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Contact;