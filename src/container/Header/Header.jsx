import React from 'react';
import './Header.css';
import headerphoto from './headerphoto2.jpg';
import {DiCss3, DiReact, DiPython, DiJavascript1, DiJava, DiHtml5} from "react-icons/di";
import {SiTailwindcss} from "react-icons/si"


const Header = () => (
  <div className='app_header section_padding' id='home'>
   <div className='app_header_content'>
      <h1 className='gradient_text'>Hello, I'm Damien</h1>
      <h2 className='gradient_text'>Front-end developer </h2>
      <p>Welcome to my portfolio website! I am a 2023 graduate of 
      St. John Fisher University and currently seeking a front-end 
      developer position. I invite you to explore my projects 
     in web development and feel 
      free to contact me to discuss potential opportunities.</p>


      <div className='app_header_content_input'>
        <a href='#contact'><button type="button">Get In Touch</button></a>
      </div>


      <div className='app_header_content_skills'>
        <h2 className='gradient_text'>My Skills </h2>
          <div className='app_header_content_skills_list'>
            <h2 className='DiReact'><DiReact/></h2>
            <h2 className='SiTailwindcss'><SiTailwindcss /></h2>
            <h2 className='DiJavascript1'><DiJavascript1 /></h2>
            <h2 className='DiHtml5'><DiHtml5/></h2>
            <h2 className='DiCss3'><DiCss3 /></h2>
            <h2 className='DiPython'><DiPython /></h2>
            <h2 className='DiJava'><DiJava /></h2>
          </div>
      </div>
      
    </div>


      <div className='app_header_image'>
        <img src={headerphoto} alt="headerphoto" />
      </div>
   

  </div>
);

export default Header;
