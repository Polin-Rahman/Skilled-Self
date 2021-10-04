import React from 'react';
import './NotFound.css';
import errorGif from '../../images/giphy.gif';

const NotFound = () => {
    //error 404
    return (
        <div className="error-container">
            <h1 className="">Error 404 - Page not found ... Opps!</h1>
            <img className="error-img" src={errorGif} alt="" />
        </div>
    );
};

export default NotFound;