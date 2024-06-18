import React from "react";
import Behance from '../../images/footer/behance.png'
import Dribbble from '../../images/footer/dribbble.png'
import Github from '../../images/footer/github.png'
import Linkedin from '../../images/footer/linkedin.png'
import './index.css'


function Footer() {
    return(
        <div class="Footer">
            <div class="bus"></div>
            <div class="socials">
                <a href = "https://www.behance.net/jordanevans4" target="_blank" rel="noreferrer"><img alt="behance" src={Behance}></img></a>
                <a href = "https://dribbble.com/Hipstereditz/shots" target="_blank" rel="noreferrer"><img alt="dribbble" src={Dribbble}></img></a>
                <a href = "https://github.com/DiondraEvans" target="_blank" rel="noreferrer"><img alt="github" src={Github}></img></a>
                <a href = "https://www.linkedin.com/in/diondra-e/" target="_blank" rel="noreferrer"><img alt="linkedin" src={Linkedin}></img></a>
            </div>
        </div>
    )
    }
    
    export default Footer;