import './index.css';
import React, { useEffect, useState, useContext  } from 'react';
import { AppContext } from '../../contexts/app_context';
import Card from '../card'


function Projects(props) {

    let {UX, WEB, DESIGNS, setShowDiv, showDiv, selectedItem, setSelectedItem} = useContext(AppContext);
   

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    let projectsToShow = null;
    if (selectedItem === "UX") {
        projectsToShow = UX.map((object, index) => {
            console.log(object.cardTitle);
            return (
                <Card key={index} object={object} />
            );
        });
    } else if (selectedItem === "WEB") {
        projectsToShow = WEB.map((object, index) => {
            console.log(object.cardTitle);
            return (
                <Card key={index} object={object} />
            );
        });
    }else if (selectedItem === "DESIGNS"){
        projectsToShow = DESIGNS.map((object, index) => {
            console.log(object.cardTitle);
            return (
                <Card key={index} object={object} />
            );
        });
    }
    //showing the popup. toggle true and false shows and hides the popup

  
    
    return (
        <div className="container">
            <ul className="categoryList" id="categoryList">
                <li className={selectedItem === "UX" ? "selected" : ""} onClick={() => handleItemClick("UX")}>UX/UI</li>
                <li className={selectedItem === "WEB" ? "selected" : ""} onClick={() => handleItemClick("WEB")}>WEB DEVELOPMENT</li>
                <li className={selectedItem === "DESIGNS" ? "selected" : ""} onClick={() => handleItemClick("DESIGNS")}>WEB DESIGNS</li>
            </ul>
            <div className="Projects">
                {projectsToShow} 
            </div>
        </div>
    );
}

export default Projects;