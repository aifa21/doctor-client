import React, {  useState } from "react";
import "./Login.css";
import google from "../../images/google.png";
import fb from "../../images/fb.png";
import medicine from "../../images/Medicine.gif";
import Navbar from "../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import useAuth from './../../hooks/useAuth';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";



function Login() {
  const { signInUsingGoogle,handleSignInEmail,handleCreateEmail,error  } = useAuth();
  const location = useLocation();
 
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(true);
  const [wrong, setWrong] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  
//........... SIGN IN WITH EMAIL  .................
const handleNameBlur= event =>{
  setName(event.target.value);
}

const handleEmailBlur = event => {
  setEmail(event.target.value);
}

const handlePasswordBlur = event => {
  setPassword(event.target.value);
}
const handleConfirmPasswordBlur = event => {
  if(password===event.target.value)
  {setConfirmPassword(event.target.value);}
}

const handleRegisteredChange = event => {
  setRegistered(event.target.checked)
}
// ........................................................
const handleFormSubmit = event => {
  console.log(event);
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.stopPropagation();
    return;
  }

  if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
    setWrong('Password Should contain at least one special character');
    return;
  }
  setValidated(true);
  setWrong('');

  if (registered) {
    handleSignInEmail(email,password,location, history)
     
  }
  else {
    handleCreateEmail(email,name,password);
    if(error){
      alert(error);
    }
    else{
      alert("Account created");
    }
   
  }
  

}
  

  //........  SIGN IN  WITH GOOGLE ..................

  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
}
const fbSignIn = () => {
 
}


  return (
    <>
    <Navbar/>
    <div style={{ textAlign: "center" }} className="sign-up">
      <div className="row">
        <div className="col-md-6">
          <div className="login-container">
            <h4 className="mt-2">{registered ? "Login" : "Create An Account"}</h4>

            <form onSubmit={handleFormSubmit}>
          
                
                {
                  registered&&(
                    <input
                  name="name"
                  type="text"
                  onBlur={handleNameBlur}
                  placeholder="Name: maya1"
                  required
                />
                  )
                }
                {
                  !registered&&(
                    <input
                  name="name"
                  type="text"
                  onBlur={handleNameBlur}
                  placeholder="Name"
                  required
                />
                  )
                }
           

              <br />
              {
                registered&&(
                  <input
                type="text"
                name="email"
                onBlur={handleEmailBlur}
                placeholder="Email address: maya1@gmail.com"
                required
              />
                )
              }
              {
                !registered&&(
                  <input
                  type="text"
                  name="email"
                  onBlur={handleEmailBlur}
                  placeholder="Email address"
                  required
                />
                )
              }

              <br />

             {
               registered&&(
                <input
                type="password"
                name="password"
                onBlur={handlePasswordBlur}
                placeholder="Password:1234567!"
              />
               )
             }
              {
                !registered&&(
                  <input
                type="password"
                name="password"
                onBlur={handlePasswordBlur}
                placeholder="Password"
              />
                )
              }
              <br />

              {!registered && (
                <input
                  type="password"
                  name="password"
                  onBlur={handleConfirmPasswordBlur }
                  placeholder="Confirm Password"
                  required
                />
              )}
              <br />

              <div className="d-flex justify-content-between p-4">
                {registered && (
                  <label>
                    <input type="checkbox" /> <small style={{fontSize:"13px"}}> Remember me </small>
                  </label>
                )}
                {registered && (
                  <button className="forgetBtn">
                    {" "}
                    <small >
                      {" "}
                    <Link to="/forget">  Forgot Password?</Link>
                    </small>
                  </button>
                )}
              </div>
              <br />
              <input
                type="submit"
                value={!registered ? "Create an account" : "Login"}
              />
              <br />
              <br />
            
            </form>

            <p style={{ textAlign: "center" }}>{!registered ? "Already have an account ? " : "Don't have account ?"}
              <span
                onClick={() => setRegistered(!registered)}
                style={{ color: "#F9A51A", cursor: "pointer" }}
              >
                {!registered ? " Login" : " Create Account"}
              </span>
            </p>
            <span style={{ fontSize: "15px" }}>Or</span>
            <div className="social container-fluid">
              <div className="google-div validate-input m-b-20">
                <button className="google" onClick={handleGoogleLogin}>
                  <img src={google} height="25" alt="" />
                </button>
              </div>
              <br />
              <div className="facebook-div">
                <button className="facebook" onClick={fbSignIn}>
                  <img src={fb} height="30" alt="" />
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <img src={medicine} height="500" alt="" />
        </div>
      </div>
      <p style={{ color: "red" }}>{error}</p>
      
    </div>
   
    </>
  );
}

export default Login;
