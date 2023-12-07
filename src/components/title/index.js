import './index.css';
import React, { useEffect, useState, useContext, useRef } from 'react';
import {gsap} from 'gsap';


function Title() {
    let stagTitle = useRef(null);
    
    useEffect(() => {
        gsap.to(stagTitle.current, {
          duration: 1.5,
          y: 100,
          opacity: 1,
          stagger: 0.95,
          ease: 'power2.out',
        });
      }, []);


    return(
    <div  class="Title">
        <h1 ref={stagTitle} classname="stagTitle">Hi, my name is Diondra Evans</h1>
        <h2 ref={stagTitle} classname="stagTitle">I'm a designer & developer</h2>
    </div>
)
}

export default Title;