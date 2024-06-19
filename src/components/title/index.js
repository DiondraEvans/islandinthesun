import './index.css';
import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';


function Title() {
    let stagTitle = useRef(null);
    
    useEffect(() => {
        gsap.to(stagTitle.current, {
          duration: .8,
          y: 60,
          opacity: 1,
          ease: 'power1.out'
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