import EMKThumbnail from '../images/uxphotos/EMK/emk_thumbnail.png'
import BCThumbnail from '../images/uxphotos/BC/bookclub_thumbnail.png'
import WBNBThumbnail from '../images/uxphotos/WBNB/display-mockup-min.jpeg'
import SneakersThumbnail from '../images/webphotos/sneakers/Mockup-min.png'
import SpaceshipThumbnail from '../images/webphotos/battle/SpaceshipThumbnail.png'
import G3SolutionsThumbnail from '../images/webdesigns/g3/g3solutions_thumbnail.jpg'
import {useState, createContext} from 'react';

export const AppContext = createContext();

// we take in props because we want access to the children
const AppContextProvider = (props) => {
    // put our state
const [UX, setUX] = useState(
[
{
    cardTitle:"Eat More Korean",
    cardImage: EMKThumbnail,
    cardDes: "Kiosk app for customers of different language backgrounds to ease the process of ordering authentic Korean food."
},
{
    cardTitle: "BookClub",
    cardImage: BCThumbnail,
    cardDes: "A website that acts as a social platform to host book clubs and live discussion feeds centered around your availibility."
},
{
    cardTitle: "WindBNB",
    cardImage: WBNBThumbnail,
    cardDes: "Based off of the popular accommodation booking app Airbnb, my app incorporates a unique feature that allows friends to plan together."
}
]);

const [WEB, setWEB] = useState(
[
{
    cardTitle:"Sneakers",
    cardImage: SneakersThumbnail,
    cardDes: "Sneakers is a full CRUD e-commerce website designed and coded to provide an exceptional shopping experience for sneaker enthusiasts."
},
{
    cardTitle:"Alien Battle",
    cardImage: SpaceshipThumbnail,
    cardDes: "A horde of aliens have attacked! Let's fight them off! This is a fun probablity game."
},
{
    cardTitle: "WindBNB",
    cardImage: WBNBThumbnail,
    cardDes: "Based off of the popular accommodation booking app Airbnb, my app incorporates a unique feature that allows friends to plan together."
}
]);

const [DESIGNS, setDESIGNS] = useState(
[
{
    cardTitle:"G3 Solutions",
    cardImage: G3SolutionsThumbnail,
    cardDes: "The business owner wanted an online presence that was user-friendly so that his clientele could easily navigate around the website and locate services."
}
]);
const [showDiv, setShowDiv] = useState(false);
const [Case, setCase] = useState("");
const [cardTitle, setCardTitle] = useState("");
const [selectedItem, setSelectedItem] = useState("UX");
return (
        <AppContext.Provider value={{
            UX, setUX,
            WEB, setWEB,
            DESIGNS, setDESIGNS,
            showDiv, setShowDiv,
            Case, setCase,
            selectedItem, setSelectedItem
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;