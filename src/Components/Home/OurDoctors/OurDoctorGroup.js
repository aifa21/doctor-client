import React from 'react';
import { Link } from 'react-router-dom';
import doctorImg from '../../../images/5790-removebg.png';
const OurDoctorGroup = (props) => {
    console.log(props);
    const {
        name,
        email,
        Category,
        degree,
        days,
        time,
        designation,
        img,
      } = props.doctor;
    return (
        <div class="box">
        <img className="ml-4"alt="img" src={img} />
        <h3>{name}</h3>
        <span>{Category}</span>
        <div class="share">
            <Link to="#" class="fab fa-facebook-f"></Link>
            <Link to="#" class="fab fa-twitter"></Link>
            <Link to="#" class="fab fa-instagram"></Link>
            <Link to="#" class="fab fa-linkedin"></Link>
        </div>
    </div>
    );
};

export default OurDoctorGroup;