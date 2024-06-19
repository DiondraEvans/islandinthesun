import './index.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';

function Card(props) {
    let {setShowDiv, showDiv, Case} = useContext(AppContext);
    //setCase was pulled from AppContext above however now I am using the URLs to show my work instead of case by case page popups
   let object = props.object
console.log(object.cardTitle)

    function handleClick() {
        if ( object.cardTitle === "Eat More Korean"){
            // setCase("emk")
            console.log(Case)
            window.location.href="https://www.figma.com/proto/uYdFZLAoAMXMdnayE5GaYH/EMK-project?kind=proto&node-id=307-890&page-id=0%3A1&scaling=scale-down&starting-point-node-id=315%3A146&viewport=590%2C-572%2C0.04"
           
        }else if ( object.cardTitle === "BookClub"){
            // setCase("bc")
            console.log(Case)
            window.location.href="https://timely-flan-0e0f4c.netlify.app/"
    
        }else if ( object.cardTitle === "WindBNB"){
            // setCase("wbnb")
            console.log(Case)
            window.location.href = 'https://windbnb-zd7l.onrender.com';

        }else if ( object.cardTitle === "Sneakers"){
            // setCase("sn")
            console.log(Case)
            window.location.href ='https://sneakers-c24z.onrender.com/'
        }else if ( object.cardTitle === "Alien Battle"){
            // setCase("ab")
            console.log(Case)
            window.location.href ='https://diondraevans.github.io/Space-Battle-MOD-1-PROJECT-/'
            
        }else if ( object.cardTitle === "G3 Solutions"){
            // setCase("g3")
            console.log(Case)
            window.location.href ='https://www.figma.com/proto/J1hy96GfumSRy89exz5Z5O/G3-Solutions?page-id=0%3A1&node-id=1-2&viewport=368%2C413%2C0.05&t=VveAOVdb7hA9QD2c-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2'
        }
        if(showDiv === false){
            setShowDiv(true);
        } else if (showDiv === true){
            setShowDiv(false);
        }
        
    }
    return(
        <div class="card One">
            <div class="cardTitle">{object.cardTitle}</div>
            <img alt="cards for each project" class="cardImage" src ={object.cardImage}></img>
            <div class= "cardDes">{object.cardDes}</div>
            <Link to='/#sand_navbar'><div class="prBtn"  onClick={() => handleClick()}> View</div></Link>
        </div>
    )
}
//sand_navbar scrolls to the right place only in the EMKpopup or known as "popup" card because the code is set up for that popup and no other ones
export default Card;
 