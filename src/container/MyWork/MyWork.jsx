import React from 'react';
import './MyWork.css';
import DreamCuisine from './DreamCuisine.jpg';
import EventPro from './EventPro.jpg';

const MyWork = () => (
  <div className='app_mywork' id="mywork">
    <div className='app_mywork_content'>
      <h1>Check Out My Work</h1>

      <div className='app_mywork_container'>
          <div className='app_mywork_container_content'>
            <h2>Event Pro</h2>
            <p> During my senior year our class chose to create a 
              QR attendance tracking system. Our purpose for 
              creating this was to optimize the attendance process 
              and extend class time. My responsability was creating 
              a web application for event oranziers to use and seek 
              any data needed from past events. This project 
              was very important to me as it helped be broaden my skills
               as a web devloper by learing React and engaging in a devlopment 
               team like setting.

            </p>

            <div className='app_mywork_container_content_buttons'>
              <div className="app_mywork_button_git">
              <a href="https://github.com/dzawatski77/Senior_Project">
                <button type="button">GitHub</button>
                </a>
              </div>
              <div className="app_mywork_button_site">
              <a href="https://eventproeventworks.netlify.app/">
                <button type="button">Live Site</button>
                </a>
              </div>
            </div>
          </div>

        <div className='app_mywork_image'>
          <img src={EventPro} alt="EventPro.jpg" />
        </div>

      </div>


      <div className='app_mywork_container_two'>
          <div className='app_mywork_container_content_two'>
            <h2>D.R.E.A.M Cuisine</h2>
            <p>This is a website for a catering company located in 
              Charlotte North Carolina. The intent for this website was 
              to gain more leads and show the communiy what the company 
              had to offer.</p>

            <div className='app_mywork_container_content_buttons_two'>
              <div className="app_mywork_button_git">
                <a href="https://github.com/dzawatski77/DREAM-Cuisine">
                <button type="button">GitHub</button>
                </a>
              </div>
              <div className="app_mywork_button_site">
              <a href="https://dzawatski77.github.io/DREAM-Cuisine/">
                <button type="button">Live Site</button>
                </a>
              </div>
            </div>
         </div>

        <div className='app_mywork_image'>
          <img src={DreamCuisine} alt="DreamCuisine.jpg" />
        </div>

      </div>


    </div>
  </div>
);

export default MyWork;
