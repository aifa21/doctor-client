import React, { useEffect, useState } from 'react';
import OurDoctorGroup from "./OurDoctorGroup";
import './OurDoctors.css';
const OurDoctors = () => {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(()=>{
        fetch(" https://shrouded-island-20625.herokuapp.com/addDoctors")
        .then((res) => res.json())
        .then((data) =>  setDoctorList(data));
    },[]);

    return (
        <>
        <section class="doctors" id="doctors">
         <h1 class="heading"> our <span>doctors</span> </h1>
        <div class="box-container">
        
         {
         doctorList.map(doctor=><OurDoctorGroup doctor={doctor} key={doctor._id}></OurDoctorGroup>)
            }
            </div> 


</section>
        </>
    );
};

export default OurDoctors;