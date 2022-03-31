import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Register = () => {
return (
  <div> 
    <body>
         <div class="banner">
            <div class="overlay">
               <div class="navbar">
                  <img src={lg}/>
                  <div class="menu" align="center">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/login">Login</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="log-box">
             <div class="reg">
                 <form name="logform" id="logform" method="POST">
                     <h2>Register</h2>
                     <input type="text" placeholder="Full Name" name="Name"/>
                     <input type="text" placeholder="Email" name="email"/>
                     <input type="text" placeholder = "Phone Number" name="phone number"/>
                     <input type="password" placeholder="Password" name="pass"/>
                     <a href="login.html">Already have an account !!</a><br/><br/>
                     <button align="center" type="submit">Register</button>
                 </form>
             </div>
         </div>
   </body>
  </div>
);
};

export default Register;