import './index.css';
import React, { useEffect, useState, useContext  } from 'react';
import Water from '../water';
import Title from '../title';
import Sun from '../../images/Sun.png'
import Island from '../../images/Island.png'
import coconutTree from '../../images/Tree.gif'
import Nav from '../nav';

function Hero() {
return(
    <div class="Hero">
        <Nav />
        <img src={Sun} class="Sun"></img>
        <div class ="clouds">
            <div class = "cloud background"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
            <div class = "cloud"></div>
        </div>
        <div class="Island_group">
            <img src={coconutTree} class="coconutTree"></img>
            <img src={Island} class="Island"></img>
        </div>
        <Title />
        <Water />
    </div>
)
}

export default Hero;