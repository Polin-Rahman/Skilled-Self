import React from 'react';
import './About.css';
import aboutImg from '../../images/about.jpg';

const About = () => {
    return (
        //about us component
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
    );
};

export default About;