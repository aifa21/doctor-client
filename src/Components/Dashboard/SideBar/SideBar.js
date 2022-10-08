import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar, faGripHorizontal, faUsers,faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
 import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import useAuth from './../../../hooks/useAuth';
const SideBar = () => {
    const {user}=useAuth();
    const [isDoctor, setIsDoctor] = useState(false);
  

    useEffect(() => {
       fetch(' https://shrouded-island-20625.herokuapp.com/isDoctor',{
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({email:user.email})
       })
       .then(res=>res.json())
       .then(data=>setIsDoctor(data))
    }, [])
   
 
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-3 px-4"style={{height:"190vh"}}>
            <ul className="list-unstyled">
                
            {
                isDoctor&&<div className='sidebarText'>
                <li><Link to="/appointment"className="text-white"><FontAwesomeIcon className="font" icon={faCalendar}/><span>Appointment</span></Link></li>
                <li ><Link to="/dashboard"className="text-white "><FontAwesomeIcon className="font"icon={faGripHorizontal}/><span>Dashboard</span></Link></li>              
                <li><Link to="/allPatient"className="text-white"><FontAwesomeIcon className="font"icon={faUsers}/><span>Patients</span></Link></li>
                <li><Link to="/prescription"className="text-white"><FontAwesomeIcon className="font"icon={faFileAlt}/><span>Prescription</span></Link></li>
                <li><Link to="/doctors"className="text-white"><FontAwesomeIcon className="font"icon={faFileAlt}/><span>Doctors</span></Link></li>
                <li><Link to="/addDoctors"className="text-white"><FontAwesomeIcon className="font"icon={faPeopleArrows}/><span>Add Doctors</span></Link></li>
                    </div>
                }
        
            </ul>
            
            
        </div>
    );
};

export default SideBar;