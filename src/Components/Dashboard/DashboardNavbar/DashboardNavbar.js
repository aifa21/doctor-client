import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSignOutAlt, faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
    const {user,logOut}=useAuth();
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark  "style={{ backgroundImage: "linear-gradient(40deg, #1928d3,#8ba8f2)"}}>
         <Link to="/"> <div style={{color:"white",margin:"20px"}}>
          <FontAwesomeIcon icon={faWarehouse} />
         </div></Link>
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        {
             user.email?           
             <button  onClick={logOut}className="logoutButton"><FontAwesomeIcon icon={faSignOutAlt}/><span className="ml-1">Log Out</span></button>
             :
             <Link className="nav-links mr-5 " to="/login" activeClassName="active" ><FontAwesomeIcon icon={faUser}className="mr-2"/>Login</Link>
             }             
          
        </form>
        <div style={{color:"white",margin:"20px"}}>
       
           {
               user.displayName
           } 
        </div>
    </nav>
    );
};

export default DashboardNavbar;