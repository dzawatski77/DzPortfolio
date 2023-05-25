import React from 'react';

import './AboutMe.css';

const AboutUs = () => (
  <div className='app_aboutme' id="aboutme">
    <div className='app_aboutme_content'>
      <div className='app_aboutme_container_small'>
        <h2>More About Me</h2>
      </div>
      <div className='app_aboutme_container_big'>
        <p>Hello, my name is Damien and I enjoy creating works 
        of art that live on the Internet. I fell in love with web 
        development after exploring the endless possibilities that 
        are offered when it comes to building websites. I'm ready to 
        take the next step and work with you to contiue my passion 
        and amaze clients.</p>
      </div>
    </div>

    <div className='app_aboutme_content_two'>
      <div className='app_aboutme_container_big_two'>
        <p>For the past four years, I have been studying 
          Computer Science at St. John Fisher University. 
          During my time there, I have also gained practical 
          experience by participating in various events such as 
          Cyberseed and participating in our computer science club.
          In addition, I have also done work as a freelance web developer, 
          designing websites for various clients.</p>
      </div>
      <div className='app_aboutme_container_small_two'>
        <h2>Education/ Experience</h2>
      </div>
    </div>

    <div className='app_aboutme_content'>
      <div className='app_aboutme_container_small'>
        <h2>What I Do For Fun</h2>
      </div>
      <div className='app_aboutme_container_big'>
        <p>When I'm not coding, you can often find me 
          indulging in my passion for sports. I am a huge 
          fan of football, hockey, and Formula One, and I 
          love watching games and races with friends and 
          family. One of my favorite pastimes is also aerial 
          photography, which I find to be an exciting and 
          creative way to unwind and have fun.</p>
      </div>
    </div>
    </div>
   
);

export default AboutUs;
