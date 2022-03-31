import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Contact = () => {
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
                     <h2>Contact us</h2>
                     <input type="text" placeholder="Email" name="mail"/>
                     <input type="text" placeholder="Enter your query" name="pass"/>
                     <button align="center" type="submit">Submit</button>
                 </form>
             </div>
             <p>Gmail: cradleshome@gmail.com</p>
         </div>
         
   </body>
  </div>
);
};

export default Contact;