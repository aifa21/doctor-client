import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import SideBar from '../SideBar/SideBar';
import './Booking.css';
import Prescription from './../Prescription/Prescription';
const Bookings = () => {
    const {user}=useAuth();
    const [appointments,setAppointments]=useState([]);
    const [isDoctor, setIsDoctor] = useState(false);
    const [doctorList, setDoctorList] = useState([]);
    const [open,setOpen]=useState(false);
    const [prescription, setPrescription] = useState([]);
    const [prescribe, setPrescribe] = useState([]);
    
 
    const handleOpen=()=>{
      setOpen(true);
    }
  
  
    
  
    useEffect(() => {
      fetch(' https://shrouded-island-20625.herokuapp.com/isDoctor',{
       method: 'POST',
       headers: { 'content-type': 'application/json' },
       body: JSON.stringify({email:user.email})
      })
      .then(res=>res.json())
      .then(data=>setIsDoctor(data))
   }, [])
    useEffect(() => {
      fetch(` https://shrouded-island-20625.herokuapp.com/singleDoctor?email=${user.email}`)
      .then((res) => res.json())
      .then((data) =>{setDoctorList(data)} );
    }, [user.email])
   
  useEffect(() => {
    fetch(" https://shrouded-island-20625.herokuapp.com/prescription")
      .then((res) => res.json())
      .then((data) => setPrescription(data));
  }, []);
 
         useEffect(() => {
             fetch(` https://shrouded-island-20625.herokuapp.com/specificAppointments?email=${user.email}`)
               .then((res) => res.json())
               .then((data) =>  setAppointments(data));
           }, [user.email]);

           useEffect(() => {
            fetch(` https://shrouded-island-20625.herokuapp.com/specificPrescription?email=${user.email}`)
              .then((res) => res.json())
              .then((data) =>  setPrescribe(data));
          }, [user.email]);


          

        
         
    
    return (
      
 
<div className="dashboardSection">
   <DashboardNavbar/>
    {
     <div style={{ display: isDoctor ? "block" : "none" }}>
     
       <div className="row " >
      
      <div className="col-md-2"><SideBar></SideBar></div>
      <div className=" col-md-10 ">
      <h3  className="heading mt-5">My <span>Information</span></h3>
  <TableContainer className="TableContainer" component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableHeading">Name</TableCell>
          <TableCell className="tableHeading"align="left">Email</TableCell>
          <TableCell className="tableHeading"align="left">Category</TableCell>
          <TableCell className="tableHeading"align="left">Degree</TableCell>
          <TableCell className="tableHeading"align="left">Designation</TableCell>
          <TableCell className="tableHeading"align="left">Time</TableCell>
          <TableCell className="tableHeading"align="left">Day</TableCell>      
        </TableRow>
      </TableHead>
      <TableBody>
        {doctorList.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell className="tableBody"component="th" scope="row">{row.name}</TableCell>
            <TableCell className="tableBody"align="left">{row.email}</TableCell>
            <TableCell className="tableBody"align="left">{row.Category}</TableCell>
            <TableCell className="tableBody"align="left">{row.degree}</TableCell>
            <TableCell className="tableBody"align="left">{row.designation}</TableCell>
            <TableCell className="tableBody"align="left">{row.time}</TableCell>
            <TableCell className="tableBody"align="left">{row.days}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
          </div>
          </div>
    
     </div>
    }

       
     {
    <div style={{ display: isDoctor ? "none" : "block" }} > 
      <div className='row'>
     
     <div className="bookingTable col-md-9 ">
        <h3  className="heading mt-5">My <span>Information</span></h3>
    <TableContainer className="tableContainer" component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeading">Name</TableCell>
            <TableCell className="tableHeading"align="left">Email</TableCell>
            <TableCell className="tableHeading"align="left">Time</TableCell>
            <TableCell className="tableHeading"align="left">Date</TableCell>
            <TableCell className="tableHeading"align="left">Phone</TableCell>
            <TableCell className="tableHeading"align="left">Age</TableCell>
            <TableCell className="tableHeading"align="left">Appointment On</TableCell>
            <TableCell className="tableHeading"align="left">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="tableBody"component="th" scope="row">{row.name}</TableCell>
              <TableCell className="tableBody"align="left">{row.email}</TableCell>
              <TableCell className="tableBody"align="left">{row.time}</TableCell>
              <TableCell className="tableBody"align="left">{row.date}</TableCell>
              <TableCell className="tableBody"align="left">{row.phone}</TableCell>
              <TableCell className="tableBody"align="left">{row.age}</TableCell>
              <TableCell className="tableBody"align="left">{row.appointment}</TableCell>
              {row.status==="Done"
              ?
              <>
              <TableCell className="tableBody"align="left"><button className="TableActionBtn"style={{backgroundColor:"Green"}}>Visited</button></TableCell>
              <TableCell className="tableBody"align="left"><button className="btn"onClick={() => handleOpen()}>Prescription</button></TableCell>
              </>
              :
              <TableCell className="tableBody"align="left"><button className="TableActionBtn">Not Visited</button></TableCell>
              }  
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {
      open&&<>
      <div className='prescriptionCard mt-5'>
      {
        prescribe.map((pb)=>(
          <>
          <h3>Medine : {pb.medicine}</h3>
          <h3>Advice : {pb.advice}</h3>
          </>
        ))
      }

      </div>
      </>
    }
      </div>
      </div>
      </div>
         } 

        
    </div>
       
            
      
       
    );
};

export default Bookings;