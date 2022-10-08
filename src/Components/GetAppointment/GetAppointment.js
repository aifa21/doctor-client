import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import image from "../../images/Mask Group 1.png";
import Treatments from "./Treatments";
import fakeData from "./FakeData";
import { useForm } from 'react-hook-form';
import "./GetAppointment.css";
import Navbar from "../Home/Navbar/Navbar";
const GetAppointment = () => {
  const { register, handleSubmit, errors } = useForm();
  const [date, setDate] = useState(new Date());
  const [treatments, setTreatments] = useState(fakeData);
  const [appointmentForm, setAppointmentForm] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [appointmentMsg, setAppointmentMsg] = useState(null);
  const onChange = (date) => {
    setDate(date);
  };

  const handleAppointment = (bookedAppointment) => {
    const bookedName = bookedAppointment.title;
    const bookedTime = bookedAppointment.date;
    const bookedDate = date;
    const booked = { bookedName, bookedTime, bookedDate };
    setAppointmentForm(true);
    setAppointmentDetails(booked);
  };
  // const onSubmit=data=>{
  //     setAppointmentMsg(data);
  // }
  const onSubmit=data=>{
         data.date = date;
        data.created = new Date();
        data.appointment=appointmentDetails.bookedName;
        
        
    fetch(' https://shrouded-island-20625.herokuapp.com/addAppointment',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
      .then(response => response.json())
      .then(appointment => {
          setAppointmentMsg(appointment);
      })
      window.location.reload();
      
}

// After Getting Appointment Redirect to Homepage
if(appointmentMsg) {
  setTimeout( () => {
      window.location.pathname = '/';
  }, 5000)
}
  return (
    <>
    <Navbar/>
    <div className="getAppointmentSection">
      {
        <div
          style={{ display: appointmentForm ? "none" : "block" }}
          className="getAppointmentInfo"
        >
          <div className="getAppointmentTop">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="getAppointmentCalender">
                    <h2 className="mb-4 ml-5">Appointment Date</h2>
                    <div className="Calender">
                      <Calendar value={date} onChange={onChange} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={image} alt=""className="img-fluid mt-5 pt-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="getAppointmentBottom">
            <div className="container">
              <h1
                style={{
                  color: "#1CC7C1",
                  textAlign: "center",
                  marginBottom: "50px",
                }}
              >
                Available Appointments on {date.toLocaleDateString()}
              </h1>
              <div className="row justify-content-around">
                {treatments.map((tr) => (
                  <Treatments
                    tr={tr}
                    key={tr.id}
                    handleAppointment={handleAppointment}
                  ></Treatments>
                ))}
              </div>
            </div>
          </div>
        </div>
      }

      {
        <div style={{ display: appointmentForm ? "block" : "none" }}
          className="appointmentForm-section">
          <div className="appointmentFormWrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  {appointmentDetails && (
                   <div className="formContent">
                       {
                       appointmentMsg?
                       <div className="AppointmentMsg">
                           <h1>Thanks {appointmentMsg.name} for appointment.</h1>
                           <p>Date : {appointmentMsg.date}</p>
                       </div> 
                       :
                    <div>

                      <div style={{textAlign:"center"}}>
                      <h2 style={{color: "#1CC7C1"}}>{appointmentDetails.bookedName}</h2>
                       <small >Appointment On : {date.toLocaleDateString()}</small>
                      </div>
                       <form onSubmit={handleSubmit(onSubmit)}>
                         <select
                           name="time"
                           id="data"
                           ref={register({ required: true })}
                         >
                           {treatments.map((tr) => (
                             <option key={tr.id} value={tr.date}>
                               {tr.date}
                             </option>
                           ))}
                         </select>
                         {errors.time && ( <span className="inputError">Time is required</span>
                         )}
                         <input
                           name="name" placeholder="Your Name"
                           ref={register({ required: true })}
                         />
                         {errors.name && <span className="inputError">Name is required</span>}
                         <input
                           name="email" placeholder="Your Email"
                           ref={register({ required: true })}
                         />
                         {errors.email && <span className="inputError">Email is required</span>}
                         <input
                           name="phone"placeholder="Your Phone No."
                           ref={register({ required: true })}
                         />
                         {errors.phone && <span className="inputError">Phone is required</span>}
                         
                       <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                         <button style={{marginTop:"20px"}}className="main-button">Send</button>
                       
                       </form>
                     </div>
                       }
                   </div>
                    
                   
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    </>
  );
};

export default GetAppointment;
