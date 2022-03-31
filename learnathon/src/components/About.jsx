import React from "react";
 import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const About = () => {
return (
  <div>  
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
    <div class="abt-card">
  <h1 align="center">About Us</h1>
  <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  You can help such children by sponsoring their food supplies like groceries and eatables or making donating for operation, medications, artificial limbs, physical aids, etc.
  By donating to orphans' education, you can offer them a way out of the neglect, abuse, and exploitation they face when left alone on the streets.
     <br/><br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The user must <a href="register">Register</a> into the website if there is a account already 
     user must <a href="login">Login</a> to see the content in the Students Orbit. It will make students life easier. It will save students time.
     <br/><br/>
     
     <br/><br/>
  </h2>
  <h2 align="right">
     <span  class="abt-qts">We DREAM BIG<br/></span>
     <span class="abt-qts">We DECIDE ,DEBATE and DO<br/></span>
     <span class="abt-qts">We're ONE TEAM ,We're STUDENTS ORBIT<br/></span>
     <span class="abt-qts">INNOVATION is a way of life</span>
  </h2>
</div>
  </div>
);
};

export default About;