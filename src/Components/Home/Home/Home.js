import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurDoctors></OurDoctors>
            <Appointment></Appointment>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;