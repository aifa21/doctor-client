
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import GetAppointment from './Components/GetAppointment/GetAppointment';
import DoctorAppointment from './Components/Dashboard/DoctorAppointment/DoctorAppointment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatient from './Components/Dashboard/AllPatient/AllPatient';
import Prescription from './Components/Dashboard/Prescription/Prescription';
import AddDoctors from './Components/Dashboard/AddDoctors/AddDoctors';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Contact from './Components/Home/Contact/Contact';
import Services from './Components/Home/Services/Services';
import Blog from './Components/Home/Blog/Blog';
import Doctors from './Components/Dashboard/Doctors/Doctors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "firebase/auth";
// import { initializeLoginFramework} from './components/Login/LoginManager';

import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Forget from './Components/Login/Forget/Forget';
import Bookings from './Components/Dashboard/Booking/Booking';
import Navbar from './Components/Home/Navbar/Navbar';
import OurDoctors from './Components/Home/OurDoctors/OurDoctors';


function App() {

  // initializeLoginFramework()
  
  return (
    <AuthProvider>
    <Router>
      <Switch>
       
        <Route path="/home">
          
         <Home></Home>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/getAppointment">
         <GetAppointment></GetAppointment>
        </Route>
        <PrivateRoute path="/allPatient">
          <AllPatient></AllPatient>
        </PrivateRoute>
        <Route path="/prescription">
          <Prescription></Prescription>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Navbar></Navbar>
          <Contact></Contact>
        </Route>
        <Route path="/services">
        <Navbar></Navbar>
          <Services></Services>
        </Route>
        <Route path="/appointment">
         <DoctorAppointment></DoctorAppointment>
        </Route>
        <PrivateRoute path="/dashboard">
         <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/bookings">
         <Bookings></Bookings>
        </Route>
        <Route path="/ourDoctors">
          <Navbar></Navbar>
         <OurDoctors></OurDoctors>
        </Route>
        <Route path="/doctors">
         <Doctors></Doctors>
        </Route>
        <Route path="/addDoctors">
            <AddDoctors></AddDoctors>
          </Route>
          <Route path="/forget" >
            <Forget></Forget>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
             
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
