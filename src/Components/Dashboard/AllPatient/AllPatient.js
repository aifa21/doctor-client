import React, { useState, useEffect } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import SideBar from "../SideBar/SideBar";

const AllPatient = () => {
  const [appointments, setAppointments] = useState({});
 
  useEffect(() => {
    fetch(" https://shrouded-island-20625.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="dashboardSection">
      <DashboardNavbar></DashboardNavbar>

      <div className="row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>

        <div className="dashboardContainer col-md-10 mt-3">
          <main>
            <div className="container-fluid">
              <h1 className="mb-3">Patients</h1>
              <div className="appointmentsDataTable">
                <h3 style={{ color: "#1CC7C1" }} className="text-center mb-3">
                  All Patients List
                </h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Appointment Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Appointment On</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                 
                  <tbody>
                    {appointments.length > 0 ? (
                      appointments.map((appointment) => (
                        <tr key={appointment._id}>
                          <td>{appointment.name}</td>
                          <td>{appointment.email}</td>
                          <td>{appointment.phone}</td>
                          <td>{appointment.date}</td>
                          <td>{appointment.time}</td>
                          <td>{appointment.appointment}</td>
                          {appointment.status==="Done"
                          ?
                          <td><button className="TableActionBtn"style={{backgroundColor:"Green"}}>Visited</button></td>
                          :
                          <td><button className="TableActionBtn">Not Visited</button></td>}  
                        </tr>
                      ))
                    ) : (
                      <tr id="preloder">
                        <td className="loader"></td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllPatient;
