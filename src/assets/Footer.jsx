import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
       <footer>

<div class="footer-container">
    <h4>Travel  Wonders</h4>
    <div className="footer-col">
        <h4>Mainpage</h4>
        <ul>
            <li>Blog</li>
            <li>Contact us</li>
            <li>places</li>
           
        </ul>
    </div>
    <div className="footer-col">
        <h4>Find us at</h4>
        <div className="icons">
             <a href="https://www.linkedin.com/"><BsLinkedin/></a>
             </div>            
             <div className="icons">  
             <a href="https://www.twitter.com/"><BsTwitter/></a>
             </div> 
             <div className="icons">
             <a href="https://www.facebook.com/"><BsFacebook/> </a>
             </div>
             <div className="icons">
             <a href="https://www.instagram.com/"><BsInstagram/> </a>
             </div>
    </div>
</div>



</footer>
    </div>
  )
}

export default Footer