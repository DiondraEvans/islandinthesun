import React from "react";
import Behance from '../../images/footer/behance.png'
import Dribbble from '../../images/footer/dribbble.png'
import Github from '../../images/footer/github.png'
import Linkedin from '../../images/footer/linkedin.png'
import Bus from '../../images/footer/bus.png'
import './index.css'


function Footer() {
    return(
        <div class="Footer">
            <div class="bus"></div>
            <div class="socials">
                <a href = "https://www.behance.net/jordanevans4" target="_blank"><img src={Behance}></img></a>
                <a href = "https://dribbble.com/Hipstereditz/shots" target="_blank"><img src={Dribbble}></img></a>
                <a href = "https://github.com/DiondraEvans" target="_blank"><img src={Github}></img></a>
                <a href = "https://www.linkedin.com/in/diondra-e/" target="_blank"><img src={Linkedin}></img></a>
            </div>
        </div>
    )
    }
    
    export default Footer;