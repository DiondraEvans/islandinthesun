import React, { useEffect, useState, useContext} from 'react';
import {ScrollRestoration } from 'react-router-dom'
import { AppContext } from './contexts/app_context';
import './App.css';
import Hero from './components/hero';
import Sand from './components/sand'
import Footer from './components/footer';
// import Popup from './components/popup';

function App() {
  // let {showDiv} = useContext(AppContext);
  // console.log(showDiv)
  
  return (
    <div class="App">
     <Hero />
     <Sand />
     <ScrollRestoration />
     {/* {showDiv && setCase === "bc" ? Popup /> : ""} */}
     < Footer />
    </div>
  );
}

export default App;
