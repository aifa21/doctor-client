import React, {  useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
 const {user,logOut}=useAuth();
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 
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
 console.log(user.email);
    return (
      <nav className="navbar">
      
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        <i className= "fas fa-heartbeat"></i>Medcare.
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
        
          {
           user.email&&
           <li className="nav-item">
           <NavLink
             exact
             to="/bookings"
             activeClassName="active"
             className="nav-links"
             onClick={handleClick}
           >
            {user.displayName}'s Information
           </NavLink>
         </li>
         }
          <li className="nav-item">
            <NavLink
              exact
              to="/ourDoctors"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Doctors
            </NavLink>
          </li>
          <li className='nav-item'>
          <NavLink
              exact
              to="/services"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
            Contact Us
            </NavLink>
          </li>
         
          {user.email&&<li className="nav-item"><span style={{ color: 'white' }}> {user.displayName} </span></li>}
              {
                user.email?
                <>
                <li>
                 <button className="logoutButton ml-2"   onClick={logOut}>Log out</button>
              </li>                           
              </>
              :
              <li className="nav-item">
                <NavLink className="nav-links mr-5 " to="/login" activeClassName="active" onClick={handleClick}>Login</NavLink>
              </li>
                
              }
  
  
   </ul>

    <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>

      </div>
    </nav>
    );
};

export default Navbar;

/*
{user.email&&<span style={{ color: 'white' }}> {user.displayName} </span>}
              {
                user.email?
                <>
                <li className="nav-item">
                 <button onClick={logOut}>Log out</button>
              </li>                           
              </>
              :
              <li className="nav-item">
                <NavLink className="nav-link mr-5 " to="/login" activeClassName="active" onClick={handleClick}>Login</NavLink>
              </li>
                
              }*/