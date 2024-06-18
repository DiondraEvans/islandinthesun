import React, { useContext  } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';
import Quicklinkbtns from '../quicklinkbtns';
import './index.css'

function BCPopup() {
  let {showDiv, setShowDiv} = useContext(AppContext);

  function handleClick() {
    if(showDiv === false){
        setShowDiv(true);
    } else if (showDiv === true){
        setShowDiv(false);
    }
}
  return (
    <div class="popup_screen">
       <div class="sand_navbar" id='sand_navbar'>
      <Link to='/#categoryList'> <p onClick={() => handleClick()}  class="backbtn">back</p></Link>
        {/* <p onClick={() => handleClick()}  class="backbtn">next</p> */}
      </div>
     <h2 class="case_title">Book Club</h2>

     <div class="info_grid">
       <div>
         <h3>The problem</h3>
         <p>Have you ever wanted to bond over an amazing book that you’ve read but don't have the time in your day to go to the nearest city that has a
           bookclub once a month? Well, there are many people in the world who enjoy reading the book that your currently interested in and it can be
            the topic of discussion whenever you are available. Get ready to connect with readers all over the world on your time!</p>
       </div>
        <div>
             <h3>The Solution</h3>
             <p>A website that acts as a social platform to host book clubs and live discussion feeds centered around
                     your availibility by creating asynchronous and synchronus features allowing you to interact with others.
             </p>
        </div>
        <div>
          <b>Role:</b> UX/UI Designer, Front-End Web developer
          <b>Duration:</b> 8 weeks
          <b>UX tools:</b> Figma
          <b>Frontend tools:</b> HTML, CSS, Bootstrap, Javascript
        </div>
        <div>
          < Quicklinkbtns/>
        </div>
      </div>
      <div className="block_space">
        <h2 className="header">Discover & Research</h2>
            <p className="centered_para">While there are many platforms that enable people to discuss topics around the globe there aren't any platforms centered around the discussion of books that features hosting live shows, online meetups, uploading posts attributed to a specific book, and making friends across the globe.</p>
          <h2 className="block_space">Competitive Analysis</h2>
          <p className="centered_para">I conducted research to see who the direct competitors would be for BookClub to better understand how other businesses in the book industry prioritize social interaction in a digital space with books being a center focus.</p>
          
          <div className="block_flex_start"> 
            <div>
              <h3>User's Values</h3>
              <ul className="list_items">
                <li>Personal bookshelf</li>
                <li>Book tracking </li>
                <li>Ability to keep track of friends</li>
                <li>Discussion boards</li>
              </ul>
            </div>

            <div>
              <h3>Area's of Improvement</h3>
              <ul className="list_items">
                <li>User Interaction</li>
                <li>Star rating system</li>
                <li>Book organization</li>
                <li>Age group specific reviews</li>
              </ul>
            </div>
          </div>    
          <div className="block_space">
            <h3>Understanding the user</h3>
            <p className="centered_para">The best way to understand users is to speak with them directly. I wanted to interview users that currently read books and have an interest in online book clubs and discussions.
              I asked participants specific questions to get a better understanding of what inspire and motivate their decisions in joining book clubs.</p>
          </div>
          <div className="block_space">
            <h3>Participants</h3>
            <p className="centered_para">I interviewed 4 people in my network, who I knew loved to read and participated in book clubs in the past.</p>
          </div>
          <div className="block_space">
            <h3>Interview findings</h3>
              <div className="block_flex_start">
                <p className="small_flex">4/4 users prefer joining bookclubs that meet during their availibility</p>
                <p className="small_flex">3/4 users prefer quickly reading reviews to understand other reader’s thoughts rather then sit in on a live discussion</p>
                <p className="small_flex">1/4 users prefers in person bookclubs due to habit.</p>
              </div>
            <p className="block_space centered_para">*All users have said they prioritize their time and because of this, time would affect if they will join a bookclub.</p>
          </div>
          <div className="block_space">
            <h3>Personas</h3>
            <p className="centered_para">During the interviews, each participant shared their thought processes, inspirations, and frustrations when dealing with online or in person book clubs. The common insights led me to create an Empathy Map followed by a persona to represent the target user.</p>
          </div>
          <div className="block_flex_start">
            <div className="list_items">
              <h4>Amanda Klein</h4>
              <ul>
                <li><b>Age:</b> 31</li>
                <li><b>Location:</b>Texas, USA</li>
                <li><b>Occupation:</b>Sales Associate</li>
              </ul>
            </div>
            <div className="med_flex">
              <h3>“I enjoy vicariously living through characters in a book of excitement and adventure.”</h3>
              <p><b>Bio:</b> Amanda Klein has been reading since she was a little girl. her mind wanders into the brand new world she is immersed into while she is reading. She often finds herself questioning the characters and wanting to reflect on missions that transpired. She has been apart of school book clubs in the past but does not have the time to physically go in route to a in person book asynchronous book club.</p>
            </div>
          </div>
          <div className="space_grid">
              <div>
                <ul>
                  <h3>Goals</h3>
                  <li>Loves to learn new things through discourse with others</li>
                  <li>Desires friendships with common interests</li>
                  <li>Enjoys leisure activities</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Frustrations</h3>
                  <li>Inability to commit to long distance leisure activities</li>
                  <li>Limited options available</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Needs</h3>
                  <li>Convenience</li>
                  <li>Organization</li>
                  <li>A means to discuss her thoughts about a book</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3>Motivations</h3>
                  <li>Other reader's opinions</li>
                  <li>Imagination and thrill of reading and discussion</li>
                </ul>
              </div>
          </div>

          <div className="block_space">
            <h2 className="header">Ideate</h2>
            <h3>Features</h3>
            <p className="centered_para">The product features can make or break the experience for users. After assessing the user, business goals and the technical constraints, I made a list of features essential to the user's experience socializing with Bookclub.</p>
          </div>
      </div>

    </div>
  );
}

export default BCPopup;
