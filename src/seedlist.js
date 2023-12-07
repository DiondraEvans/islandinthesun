import React, { useState } from 'react';
import EMKThumbnail from './images/uxphotos/EMK/emk_thumbnail'
import BCThumbnail from './images/uxphotos/BC/bookclub_thumbnail.png'
import WBNBThumbnail from './images/uxphotos/WBNB/display-mockup-min.png'

import SneakersThumbnail from './images/webphotos/sneakers/Mockup-min.png'
import SpaceshipThumbnail from './images/webphotos/battle/SpaceshipThumbnail.png'

const [UX, setUX] = useState(
[
{
    cardTitle:"Eat More Korean",
    cardImage: {EMKThumbnail},
    cardDes: "Kiosk app for customers of different language backgrounds to ease the process of ordering authentic Korean food."
},
{
    cardTitle: "BookClub",
    cardImage: {BCThumbnail},
    cardDes: "A website that acts as a social platform to host book clubs and live discussion feeds centered around your availibility."
},
{
    cardTitle: "WindBNB",
    cardImage: {WBNBThumbnail},
    cardDes: "Based off of the popular accommodation booking app Airbnb, my app incorporates a unique feature that allows friends to plan together."
}
]);

const [WEB, setWEB] = useState(
[
{
    cardTitle:"Sneakers",
    cardImage: {SneakersThumbnail},
    cardDes: "Sneakers is a full CRUD e-commerce website designed and coded to provide an exceptional shopping experience for sneaker enthusiasts."
},
{
    cardTitle:"Alien Battle",
    cardImage: {SpaceshipThumbnail},
    cardDes: "A horde of aliens have attacked! Let's fight them off! This is a fun probablity game."
},
{
    cardTitle:"WindBNB",
    cardImage: {WBNBThumbnail},
    cardDes: "Based off of the popular accommodation booking app Airbnb, my app incorporates a unique feature that allows friends to plan together."
}
]);