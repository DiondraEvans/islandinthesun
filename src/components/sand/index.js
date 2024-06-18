import './index.css';
import React, {  useContext } from 'react';
import Projects from '../projects/index.js'
import { AppContext } from '../../contexts/app_context';
import Popup from '../popup/index';
import BCPopup from '../bc_popup/index';
import WBPopup from '../wbpopup/index';
import SNPopup from '../SNPopup/index';
import ABPopup from '../abpopup';
import G3Popup from '../g3popup'
function Sand() {
    let {showDiv, Case} = useContext(AppContext);
return(
    <div class="Sand" id="portfolio">
            <div class="beach_grid">
                <div class="parasol"></div>
                <div class="footprints"></div>
            </div>
            <Projects />
            <div class="BBall" alt="beachball"></div>
            <div class ="sand_grid">
                <div class="castle"></div>
                <p class="about" id="about">Hello, my name is Diondra. I am a UX designer and front-end web developer. I am coming into the tech world after traveling and living in South Korea as a teacher for a year. My journey in the tech world started about 2 years ago when I discovered UX research. Now my skills have evolved and most of my experience revolves around web design and development; I am learning new tricks everyday with Javacript and React that I will be incorporating into my projects. My hobbies include motion graphics that I like to include in my web designs. I enjoy learning, and I welcome chances to explore something new!</p>
                <div class="profile"></div>
            </div>  
            {showDiv && Case === "emk" ?  <Popup /> : ""}
            {showDiv && Case === "bc" ?  <BCPopup /> : ""}
            {showDiv && Case === "wbnb" ?  <WBPopup /> : ""}
            {showDiv && Case === "sn" ?  <SNPopup /> : ""}
            {showDiv && Case === "ab" ?  <ABPopup /> : ""}
            {showDiv && Case === "g3" ?  <G3Popup /> : ""}
    </div>
)
}

export default Sand;