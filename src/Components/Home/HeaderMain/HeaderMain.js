import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/Doctors.gif';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height:"500px"}}className="headerMain "id="headerMain">
           <div className=" content">
            <h3>THE MOST VALUABLE THING<br/> IS YOUR HEALTH</h3><br/>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus corrupti dolorem qui, <br/>voluptatibus officiis reiciendis optio pariatur voluptatem fuga maxime.</p><br/>
            <Link className="btn" to="/getAppointment">Get Appointment<span class="fas fa-chevron-right"></span></Link>
            </div>
            <div className="image "><img src={doctor}/></div>
                   
        </main>
    );
};

export default HeaderMain;