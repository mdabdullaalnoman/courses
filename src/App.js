import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Course from './Components/Course/Course';
import coursesInformation from './fakeData/courses';
import Cart from './Components/Cart/Cart';



function App(props) {
const coursesInfo =coursesInformation;
const [cart,setCart] =useState([]);

const addCourse = (coursesInfo) =>{
  const newCart =[...cart,coursesInfo]
  setCart(newCart);
};

  return (
    <div >
      <div>
           <h1 style={{marginLeft:'40px',color:'maroon'}}>Total Courses : {coursesInfo.length}</h1> 
      </div>

        <Cart cart={cart}></Cart>

        <div style={{display:'flex'}}>
             {
               coursesInfo.map(coursesInf =>  <Course addCourse={addCourse} coursesInfo={coursesInf} key={coursesInf.id}></Course>)
             }
        </div>
        
  
      
    </div>
    
  );
}

export default App;
