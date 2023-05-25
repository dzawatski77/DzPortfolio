import React from 'react';
import {FaFacebookF, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import DamienZawatski_Resume from './DamienZawatski_Resume.jpg';

import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <div className='app_footer footer_section_padding'>
      <div className='app_footer_links'>
        <div className='app_footer_links_div'>
          <h4>Site Links</h4>
          <a href="#home"><p>Home</p></a>
          <a href="#aboutme"><p>About Me</p></a>
          <a href="#mywork"><p>My Projects</p></a>
          <a href="#contact"><p>Contact Me</p></a>
        </div>
        <div className='app_footer_links_div'>
          <h4>Resources</h4>
          <a href={DamienZawatski_Resume}><p>Resume</p></a>
          <a href="https://github.com/dzawatski77"><p>Github</p></a>
        </div>

        <div className='app_footer_social_div'>
          <h4>Connect With me</h4>
          <div className='social'>
            <a href='https://linkedin.com/in/damienzawatski'><FaLinkedinIn/></a>
            <a href='https://github.com/dzawatski77'><FaGithub/></a>
            <a href='https://facebook.com'><FaFacebookF/></a>
          </div>
        </div> 
        </div>

        <hr></hr>
        
        <div className='app_footer_below'>
        <div className='app_footer_copyright'>
          <small>&copy; Damien Zawatski Dev. All rights reserved.</small> 
        </div>
        </div>
      </div>
    </div>
  
   
);

export default Footer;
