import React from 'react';
import './Home.css';
import serviceImg from '../../images/servise.jpg';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    //home component
    return (
        <div>
            <div className="description-container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-service" src={serviceImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="my-5">We Have The Best Instructors</h2>

                        <div className="container-details">
                            <p><i class="fas fa-check-circle"></i> Lifetime Access</p>
                            <p><i class="fas fa-check-circle"></i> 30+ Downloadable Resources</p>
                            <p><i class="fas fa-check-circle"></i> Certificate Of Completion</p>
                            <p><i class="fas fa-check-circle"></i> Remote Learning</p>
                            <p><i class="fas fa-check-circle"></i> Free Trial 7 Days</p>
                        </div>
                        <button className="btn btn-outline-success my-5">Contact with Us</button>
                    </div>

                </div>
            </div>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;