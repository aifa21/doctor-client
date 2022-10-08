import React from 'react';
import './AppointmentList.css';
const AppointmentList = ({appointments}) => {
    console.log(appointments);
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="tableHeader">Name</th>
                    <th className="tableHeader">Phone</th>
                    <th className="tableHeader">Schedule</th>
                    <th className="tableHeader"> Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointments,index)=>
                    <tr>
                        <td className="tableBody">{appointments.name}</td>
                        <td>{appointments.phone}</td>
                        <td>{appointments.time}</td>
                      {appointments.status==="Done"?<td><button className="TableActionBtn">Visited</button></td>:<td><button className="TableActionBtn">Not Visited</button></td>}  
                    </tr>
                    )
                }
            </tbody>
            
        </table>
    );
};

export default AppointmentList;