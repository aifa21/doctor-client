import React, { useState } from 'react';
import './Contact.css';
import team from '../../../images/team.gif';
const Contact = () => {
    const [contact,setContact]=useState({});
   

    const handleBlur = (e) => {
     
        const newInfo = { ...contact };
        console.log("contact",e.target.value);
        newInfo[e.target.name] = e.target.value;
        setContact(newInfo);
      };

    const handleBookingSubmit = e => {
        console.log(contact);
       // collect data
        const contactUs = {
            ...contact
                 
        }
        console.log("newInfo=",contactUs);       
        alert("Account created");
          
         e.preventDefault();
    }
    return (
        <>
       
    <section className="contact">    
       <h1 className="heading mb-5"> <span>contact</span> now </h1>
        <div className="container">
           <div className='row'>
           <div class="image">
           <img src={team}/>
            </div>
           <form onSubmit={handleBookingSubmit}>
            <h3>Contact</h3>
            <input type="text" onBlur={handleBlur}placeholder="Your name" class="box"/><br/>
            <input type="number"onBlur={handleBlur} placeholder="Your number" class="box"/><br/>
            <input type="email"onBlur={handleBlur} placeholder="Your email" class="box"/><br/>
            <textarea type="text"  onBlur={handleBlur} cols="30" rows="10" placeholder="Your Message*"class="box"/>
            <input type="submit" value="Submit" className="btn"/>
            </form>
           </div>
            </div> 
    </section>
    </>
    );
};

export default Contact;