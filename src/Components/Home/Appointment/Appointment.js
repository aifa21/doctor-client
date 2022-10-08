import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/5790-removebg.png';
import './Appointment.css';
const Appointment = () => {
    
    return (
        <> 
        <section className="appoint-container "> 
           <div className="container">
           <div className="row ">
                <div className="col-md-5  d-none d-md-block">
                    <img src={doctor}alt=""/>
                </div>
                <div className="col-md-6 offset-md-1 text-white py-5 mt-5">
                    <h3>Appointment</h3>
                    <h1 className="my-4">Make an appointment <br/>Today</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                   <Link to="/getAppointment"> <button className="btn">Learn More</button></Link>
                </div>
            </div>
           </div>
            
        </section>
        </>
    );
};

export default Appointment;