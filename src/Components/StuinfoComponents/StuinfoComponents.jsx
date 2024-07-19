import React, { useState } from 'react';
import '../StuinfoComponents/StuinfoComponents.css';
import img from '../../assets/image/img.jpg';

const StuinfoComponents = () => {
  const [isvisible,setIsvisible] = useState(false)
  const togglevisibility = () => {
    setIsvisible(!isvisible)
  }
  
  
    return (
    <div className="container">
      <div className="card">
        <div className="icon">
           
          <img src={img} alt="Eye Icon" />
        </div>
        <p>Name: Aadhithya Raj V</p>
        <p>Registration No: 212221220001</p>
        <button className="toggle-button" onClick={togglevisibility}>
          {isvisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isvisible ? 'visible' : 'hidden'}`}>
            <p>I am pursuing a degree in Information Technology at Saveetha Engineering College. I am from Old Washermenpet in Chennai. </p>
        </div>
    </div>
    </div>
  );
};

export default StuinfoComponents;