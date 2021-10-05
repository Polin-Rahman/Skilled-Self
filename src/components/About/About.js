import React from 'react';
import './About.css';
import aboutImg from '../../images/about.jpg';
import oneImg from '../../images/one.jpg';
import twoImg from '../../images/two.jpg';
import threeImg from '../../images/three.jpg';

import { Card, CardGroup } from 'react-bootstrap';

const About = () => {
    return (
        //about us component
        <div>
            <div className="about-containar">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div className="about-text">
                    <h1>About Us</h1>
                    <div className="about-text-details">
                        <p>In today’s modern age of disruption, Skilled-Self Online is your ideal learning platform that enables you to upskill to the most in-demand technology skills like Microsoft Excel,Microsoft PowerPoint,Microsoft Word,Adobe Illustrator,Adobe Photoshop,Adobe XD,Personal grooming,Public Speaking,Financial Management,Time Management and many more. In your journey of evolution as a technologist, Skilled-Self Online helps you work smarter, get to your career goals faster and create an exciting technology led future.</p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2 className="text-center my-5">Our top Instuctors</h2>

                <CardGroup>
                    <Card className="p-5">
                        <Card.Img variant="top" src={oneImg} />
                        <Card.Body>
                            <Card.Title>Olivia Emma</Card.Title>
                            <p>Microsoft Office - expert</p>
                            <small className="text-muted">Joined 1 year ago</small>
                        </Card.Body>
                    </Card>
                    <Card className="p-5">
                        <Card.Img variant="top" src={twoImg} />
                        <Card.Body>
                            <Card.Title>James Benjamin</Card.Title>
                            <p>Graphic designing - expart</p>
                            <small className="text-muted">Joined 8 months ago</small>
                        </Card.Body>
                    </Card>
                    <Card className="p-5">
                        <Card.Img variant="top" src={threeImg} />
                        <Card.Body>
                            <Card.Title>Alexander Henry</Card.Title>
                            <p>Personal development - expart</p>
                            <small className="text-muted">Joined 1.2 year ago</small>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

        </div>
    );
};

export default About;