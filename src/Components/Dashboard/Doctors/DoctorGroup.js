import React, { useState } from "react";
import "./DoctorGroup.css";
import DoctorModal from "./DoctorModal";
const DoctorGroup = (props) => {
 
  console.log(props.doctor);
  const {
    _id,
    name,
    email,
    Category,
    degree,
    days,
    time,
    designation,
    img
  } = props.doctor;

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
    <div className="card  doctor-group col-md-6 col-sm-12">
      <div className="  d-flex justify-content-around">
        <div className="img-info">
          <img className="ml-4"alt="img" src={img} />

          <div className="card-body title">
            <h5>{name}</h5>
            <p className="my-2" style={{fontSize:"14px"}}>{email}</p>
            <h6 style={{color:"rgb(1, 122, 236)",fontSize:"20px"}}> {Category} </h6>
          </div>
        </div>

        <div className="describe"style={{marginTop:"15px"}}>
         
          <p>{degree}</p>
          <p >{designation}</p>
          <p>{days}</p>
          <p>{time}</p>
          <button onClick={() => handleBookingOpen()} className="btn">Edit</button>
        </div>
      </div>
     
    </div>
    
		<DoctorModal  id={_id} openBooking={openBooking}
     handleBookingClose={handleBookingClose}  />
    </>
  );
};

export default DoctorGroup;
