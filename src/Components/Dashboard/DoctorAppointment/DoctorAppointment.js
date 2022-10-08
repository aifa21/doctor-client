import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import useAuth from './../../../hooks/useAuth';
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const DoctorAppointment = () => {
  const {user}=useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    console.log(date.toLocaleDateString());
    setSelectedDate(date);
  };
console.log(user.email);
  useEffect(() => {
    fetch(" https://shrouded-island-20625.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate ,email:user.email}),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  });

  return (
    <div className="dashboardSection">
    <DashboardNavbar/>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <SideBar></SideBar>
        </div>
        
        <div className="col-md-5 d-flex justify-content-center mt-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
          
        </div>
        <div className="col-md-5 mt-5">
          <AppointmentByDate
            appointments={appointments}
            selectedDate={selectedDate}
          ></AppointmentByDate>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
