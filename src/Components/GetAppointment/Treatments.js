import React from 'react';
import './GetAppointment.css';
const Treatments = (props) => {
    const {title,date,available}=props.tr;
    // console.log(props);
    return (
        <div className="col-md-4">
            <div className="treatmentContent">
            <h4>{title}</h4>
            <h6>{date}</h6>
            <p>{available} </p>
            <button className="btn" onClick={()=>props.handleAppointment(props.tr)}>Book Appointment</button>
            </div>

        </div>
    );
};

export default Treatments;