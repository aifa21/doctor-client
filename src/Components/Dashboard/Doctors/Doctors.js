import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import SideBar from '../SideBar/SideBar';
import DoctorGroup from './DoctorGroup';

const Doctors = () => {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(()=>{
        fetch(" https://shrouded-island-20625.herokuapp.com/addDoctors")
        .then((res) => res.json())
        .then((data) =>  setDoctorList(data));
    },[]);
    return (
        <div className="dashboardSection">
            <DashboardNavbar/>
            <div className="row">
                <div className="col-md-2">
                <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                  <div className="doctor-container mt-3 ">
                      <h3 className='my-4'>Doctor's Info</h3>
                  <div className="row">
                     {
                         doctorList.map(doctor=><DoctorGroup doctor={doctor} key={doctor._id}></DoctorGroup>)
                     }
                     </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;