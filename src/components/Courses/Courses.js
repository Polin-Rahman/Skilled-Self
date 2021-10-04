import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Courses.css';

const Courses = () => {
    //courses component 
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fake-data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="container w-75 my-5">
            <h1 className="text-center my-5">Our Servises</h1>
            {
                courses.map((course) => (
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img className="cart-img " src={course.img} alt="" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{course.courseName}</h5>
                                    <p className="card-text">Price: $ {course.price}</p>
                                    <p className="card-text"><small >Instructor: {course.instructor}</small></p>
                                </div>

                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-outline-dark my-5">Enroll Now</button>
                            </div>

                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Courses;