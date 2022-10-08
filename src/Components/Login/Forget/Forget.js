import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { useState } from 'react';
import { Link } from 'react-router-dom';





const Forget = () => {
    const { handlePasswordReset ,handleSignInEmail} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
      }
    const handleFormSubmit = event => {
        event.preventDefault();
        handleSignInEmail(email,password);
    }
    const forgetPassword=()=>{
        handlePasswordReset(email);
        alert("Code send to your mail");
    }
    
    return (
     <div>
         <form onSubmit={handleFormSubmit}>
          
         
        <input
          type="text"
          name="email"
          onBlur={handleEmailBlur}
          placeholder="Email address"
          required
        />

        <br />
        <Link to="/login"><button onClick={forgetPassword}>Submit</button></Link>
      
       
       
        <br />
      </form>
     </div>
    );
};

export default Forget;