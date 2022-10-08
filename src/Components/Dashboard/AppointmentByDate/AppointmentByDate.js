import React from 'react';
import AppointmentList from './AppointmentList';
import './AppointmentByDate.css';
const AppointmentByDate = ({appointments,selectedDate}) => {
     
    return (
        <div className="appointmentByDate">
           <div>
           <h5 style={{color:"#1CC7C1"}}className="mb-4" >Appointments</h5>
         
           </div>
            {
                appointments.length?
                <AppointmentList appointments={appointments}></AppointmentList>
                :
                <h5 className="text-danger text-center mt-5 ">No Appointments for this Date</h5>
            }
        </div>
    );
};

export default AppointmentByDate;