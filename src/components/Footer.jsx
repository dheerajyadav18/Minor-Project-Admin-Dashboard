import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import './footer.css'

const Footer = () => (
  <div className="mt-24">

<div>
            <footer className="bootomfoot rounded-full text-center "  id="#bottomfooter">
                <div className="bottomfootcontainer">
                    <div className="bottomfoot-row">
                        <div className="bootomfoot-col">
                            <h4>Dashboard Applications</h4>
                            <ul>
                                <li><a href="#">Learning App , Fitness App</a></li>
                                <li><a href="#">Chat App , Tech News App</a></li>
                                <li><a href="#">Financial Website , Blog App</a></li>
                                <li><a href="#">Dheeraj Quiz , PPT Website</a></li>
                                <li><a href="#">Search Engine , Task To Do </a></li>

                            </ul>
                        </div>
                        <div className="bootomfoot-col">

                            <h4>Pay_Attention Team!</h4>
                            <ul>
                                <li><a href="https://www.instagram.com/dheeraj_yadav_18_/" target="_blank">Dheeraj Yadav</a></li>
                                <li><a href="https://github.com/dheerajyadav18" target="_blank">Aarti Patidar</a></li>
                                <li><a href="https://www.linkedin.com/in/dheeraj-yadav-754a981ba/" target="_blank">Anshu Mourya</a></li>
                                <li><a href="https://twitter.com/dheerajyadav_18" target="_blank">Jayti Gokharu</a></li>

                            </ul>

                        </div>
                        <div className="bootomfoot-col">
                            <h4>Links To Explore!</h4>
                            <ul>

                                <li><a href="/home" >Home</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="https://github.com/dheerajyadav18" target="_blank">GitHub</a></li>


                            </ul>
                        </div>
                        <div className="bootomfoot-col">
                            <h4>Follow Us!!</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/dheerajyadav.yadav.370/" target="_blank"><AiOutlineFacebook className='icons' /></a>
                                <a href="https://twitter.com/dheerajyadav_18" target="_blank"><AiOutlineTwitter className='icons' /></a>
                                <a href="https://www.instagram.com/dheeraj_yadav_18_/" target="_blank"><AiOutlineInstagram className='icons' /></a>
                                <a href="https://www.linkedin.com/in/dheeraj-yadav-754a981ba/" target="_blank"><AiOutlineLinkedin className='icons' /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2022 All rights reserved by Pay_Attention.com
    </p>

  </div>
);

export default Footer;
