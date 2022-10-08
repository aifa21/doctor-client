import React, { useState, useEffect } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SideBar from "../SideBar/SideBar";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import PrescriptionModal from './PrescriptionModal';
const Dashboard = () => {
  
  const [appointments, setAppointments] = useState([]);
  const [appointmentsInfo, setAppointmentsInfo] = useState([]);
  const [openBooking, setBookingOpen] = React.useState(false);
 

  const handleBookingOpen = (appointments) => {
                      setBookingOpen(true)
                      setAppointmentsInfo(appointments)
                    };
  const handleBookingClose = () => setBookingOpen(false);
  console.log(appointments);

  useEffect(() => {
    fetch(" https://shrouded-island-20625.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  const handleChange = (e) => {
    const id = e.target.name;
    console.log("id=",id);
    let color = ''
    if (e.target.value === "Done") {
        color = "success"
    }
    if (e.target.value === "On going") {
        color = "warning"
    }
    if (e.target.value === "Pending") {
        color = "danger"
    }
    
    const eventValue = {
        status: e.target.value,
        color: color
    }
 console.log("eventValue=",eventValue);
    fetch(` https://shrouded-island-20625.herokuapp.com/updateStatus/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventValue)
    })
        .then(res => res.json())
        .then(data => console.log("status=",data))
        window.location.reload();
     
       
    
}
const handleDelete=id=>{
  console.log(id);
  fetch(` https://shrouded-island-20625.herokuapp.com/deleteUser/${id}`, {
    method: "DELETE"
})
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
    window.location.reload();

}
  
  const todayAppointment = appointments.filter(
    (data) => data.date === new Date().toLocaleDateString()
  );

  const totalPatient = [];
  for (let i = 0; i < appointments.length; i++) {
    const name = appointments[i].name;
    if (totalPatient.indexOf(name) === -1) {
      totalPatient.push(name);
    }
  }

  
  
  return (
    <>
    <div className="dashboardSection">
      <DashboardNavbar />
      <div className=" row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
       
        {
          <div className="dashboardContainer col-md-10 mt-3">
            <div className="appointmentInfo mb-3">
              <h2 className="mb-3">Doctor's Dashboard</h2>
              <div className="row">
                <div className=" col-xl-3 col-md-">
                  <div className="pending dashboardContent d-flex align-items-center justify-content-center">
                    <h2 className="mr-4">{appointments.length}</h2>
                    <div className="dashboardContentInfo">
                      <p>
                        Pending
                        <br />
                        Appointments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 ">
                  <div className="today dashboardContent d-flex align-items-center justify-content-center">
                    <h2 className="mr-4">{todayAppointment.length}</h2>
                    <div className="dashboardContentInfo">
                      <p>
                        Today's
                        <br />
                        Appointment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 ">
                  <div className="totalPatient dashboardContent d-flex align-items-center justify-content-center">
                    <h2 className="mr-4">{totalPatient.length}</h2>
          
              <div className="dashboardContentInfo">
                      <p>
                        Total
                        <br />
                        Patient
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="totalAppointment dashboardContent d-flex align-items-center justify-content-center">
                    <h2 className="mr-4">{appointments.length}</h2>
                    <div className="dashboardContentInfo">
                      <p>
                        Total
                        <br />
                        Appointments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointmentsDataTable mt-3 mb-3">
              <h3 style={{color:"#1CC7C1"}}className="text-center mb-3">Appointments Data Table</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ color: "gray" }} className="tableHeader">
                      Name
                    </th>
                    <th style={{ color: "gray" }}>Email</th>
                    <th style={{ color: "gray" }}>Contact</th>
                    <th style={{ color: "gray" }}>Age</th>
                    <th style={{ color: "gray" }}>Schedule</th>
                    <th style={{ color: "gray" }}>Prescription</th>
                    <th style={{ color: "gray" }}> Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointments, _id) => (
                    <tr>
                      <td style={{ fontWeight: "600" }}>{appointments.name}</td>
                      <td style={{ fontWeight: "600" }}>{appointments.email} </td>
                      <td style={{ fontWeight: "600" }}>{appointments.phone}</td>
                      <td style={{ fontWeight: "600" }}>{appointments.age}</td>
                      <td style={{ fontWeight: "600" }}>{appointments.time}</td>
                      <td>
                     <button onClick={() => handleBookingOpen(appointments)} className="TableActionBtn"> Prescribe </button>
                      </td>
                  <td>
                    <select   name={appointments._id} value={appointments.status} onChange={e => handleChange(e)} className={`form-control  w-100 border-${appointments.color}  text-${appointments.color}`}style={{marginLeft:"0px"}}>
                     <option value="Pending" className="danger">Pending</option>
                     <option value="On going">On going</option>
                     <option value="Done">Done</option>
                     </select></td>
                    <td><FontAwesomeIcon onClick={()=>handleDelete(`${appointments._id}`)}style={{ cursor: "pointer",marginLeft:"18px",fontSize:"18px" }}color="red"icon={faTrash}title="Delete" /></td> 
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        }
      
      </div>
    </div>
    <PrescriptionModal
     appointmentsInfo={appointmentsInfo}
     openBooking={openBooking}
     handleBookingClose={handleBookingClose}>

    </PrescriptionModal>
    </>
  );
};

export default Dashboard;
