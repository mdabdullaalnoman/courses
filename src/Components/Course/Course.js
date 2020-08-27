import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
const {id,name,price} =props.coursesInfo;
const handelClick =props.addCourse;
    return (
        <div className="block-style">
            <h1>{id}</h1>
           <h3>Course Name : {name}</h3>
           <h4> Course price: {price} taka </h4>
           <Button onClick={ () => handelClick(props.coursesInfo)} variant="info">Enroll Now >></Button>{' '}
          
           
      
        </div>
    );
};

export default Course;