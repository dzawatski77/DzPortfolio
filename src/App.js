import React from 'react';

import { AboutMe, Footer, Header, MyWork, Contact } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutMe />  
    <MyWork />
    <Contact />
    <Footer />
  </div>
);

export default App;
