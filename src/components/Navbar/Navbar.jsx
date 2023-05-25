import {React, useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import logo from './dzlogo.jpg';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#aboutme">About Me</a></p>
    <p><a href="#mywork">My Projects</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="app_navbar">
      <div className="app_navbar_links">
        <div className="app_navbar_logo">
          <img src={logo} alt="app_logo" />
        </div>
        <div className="app_navbar_links_container">
         <Menu />     
        </div>
      </div>
      <div className="app_navbar_sign">
        <a href='#contact'><button type="button">Contact Me</button></a>
      </div>

      
      <div className='app_navbar_menu'>
        {toggleMenu 
        ? <RiCloseLine  onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line  onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          
          <div className="app_navbar_menu_container scale-up-center">
            <div className="app_navbar_menu_container_links">
              <Menu />
              <div className="app_navbar_menu_container_sign">
                <button type="button">Contact Me</button>
              </div>
            </div>
          </div>
        )}
         
      </div>
    </div> 
  );
};

export default Navbar;
