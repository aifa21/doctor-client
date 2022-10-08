import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth.png';
import whitening from '../../../images/tooth (1).png';
import ServicesDetail from './ServicesDetail';
import './Services.css';
const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
    <section className="services">      
         <h1 class="heading"> our <span>services</span> </h1> 
               <div className="service-container">
               {
                    serviceData.map(service => <ServicesDetail service={service} key={service.name}></ServicesDetail>)
                }
               </div>

            
        </section>
    );
};

export default Services;