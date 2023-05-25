import React from 'react';
import ContactComponent from './ContactComponent';
import DamienZawatski_Resume from './DamienZawatski_Resume.jpg';

import './Contact.css';

const Contact = () => (
  <div className='app_contact' id='contact'>
    <div className='app_contact_overlay'>

      <div className='app_contact_container'>
          <div className='app_contact_additional'>
            <h1>Dont forget to check these out! </h1>
            <div className='app_contact_links'>
              
              <a href={DamienZawatski_Resume}>
                <button>Resume</button></a>
              
              <a href='https://linkedin.com/in/damienzawatski'>
                <button>LinkedIn</button></a>
             
              <a href='https://github.com/dzawatski77'>
                <button>GitHub</button></a>
            </div>
          </div>
      </div>

      <div className='app_contact_form'>
          <ContactComponent/>
      </div>
    </div>
  </div>
);

export default Contact;
