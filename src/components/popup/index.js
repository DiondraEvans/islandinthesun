import React, { useEffect, useState, useContext  } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';
import './index.css'
import Banner from '../../images/uxphotos/EMK/screen_dash.png'


function Popup() {
  let {showDiv, setShowDiv, setCase, Case, UX, selectedItem, setSelectedItem} = useContext(AppContext);

  function handleClick() {
    if(showDiv == false){
        setShowDiv(true);
    } else if (showDiv == true){
        setShowDiv(false);
    }
}
//   function handleNext() {
//     if(selectedItem === "UX"){
      
//     }
// }
  return (
    <div class="popup_screen">
      <div class="sand_navbar" id='sand_navbar'>
      <Link to='/#categoryList'> <p onClick={() => handleClick()}  class="backbtn">back</p></Link>
        {/* <p onClick={() => handleClick()}  class="backbtn">next</p> */}
      </div>
      <div class="banner"></div>
      <h1 class="case_title">Eat More Korean</h1>
      <div>
          <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="50%" height="500" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuYdFZLAoAMXMdnayE5GaYH%2FEMK-makeover%3Fpage-id%3D0%253A1%26node-id%3D315-146%26viewport%3D590%252C-572%252C0.04%26scaling%3Dscale-down%26starting-point-node-id%3D315%253A146" allowfullscreen=""></iframe>
      </div>
      <div class="info_grid">
        <div class="emkOneThree">
          <h3>The Idea</h3>
          <p>I created a Kiosk app for customers of different language backgrounds to ease the process of ordering authentic Korean food.</p>
        </div>
        <div class="emkOneFour">
          <h3>The Audience</h3>
          <p>13-60</p>
        </div>
        <div class="emkOneFive">
          <h3>The User Problem</h3>
          <p>Many users that frequent the Eat More Korean restaurant come from different
          language backgrounds due to the area composition and the store
          location being inside an international market. The store uses a menu board that is written only in English and Korean with no description of what the meals consists of. Because of this, some customers may feel exclusion and have a misunderstanding
          of what is on the menu due to the language barrier.
          </p>
        </div>
        <div class="emkOneSix">
          <h3>The Project</h3>
          <p>This project was inspired from my Korean 2002 class.
          <br /><b>Role</b>: UX Researcher/Designer
          <br /><b>Timeline</b>: 18 weeks
          <br /><b>UX Tools</b>: Figma
          </p>
        </div>
        
      </div>
        <h2 class ="block_space">Design Process</h2>
      <div class ="design_process"></div>
      
        <div class="block_space">
        <h2 class="header">Discover & Research</h2>
          <h2>User Surveys</h2>
          <h3>Goal</h3>
          <p>To collect 10 complemented 6-question user survey to discover the demographic of Eat More Korean's consumer base</p>
          <h3>Questions on survey <span style={{fontSize: "12px"}}>< br/>(written in Spanish, English, and Korean)</span></h3>
          <ul>
            <li>What is your age?</li>
            <li>What is your nationality?</li>
            <li>Can you read Korean?</li>
            <li>Do you depend on the English translations of a food item to choose your meal?</li>
            <li>How do you benefit from the use of the Korean language at Eat More Korean?</li>
            <li>How do you benefit from the use of the Korean language at Eat More Korean?</li>
          </ul>
        </div>
        <div class="block_space">
          <h2>User Interviews</h2>
          <h3>Goal</h3>
          <p>Conduct face to face interviews to identify if creating a multilingual menu is beneficial to the business</p>
          <h3>Questions asked:</h3>
          <ul>
            <li>What is your native language?</li>
            <li>Would you find it easier to order if the menu was written in your native language?</li>
            <li>Can you describe your process of ordering at Eat More Korean?</li>
            <li>If you have a family member that isn't fluent in English, do you believe it would be difficult for them to order at Eat More Korean? Why?</li>
            <li>Would incorporating multiple languages increase how much you come and buy at Eat More Korean?</li>
          </ul>
        </div>
        <div class="block_space">
          <h2 class="header">Synthesis Research</h2>
          <h3>Method of synthesis research</h3>
          <p class="centered_para">By using an affinity map to group notes that were taken during interviews and responses on surveys, trends and insights become visible: motivations, goals, common pain points and needs.</p>
          <div class="bubbles"></div>
          <div class="personas"></div>
        </div>
        <div class="block_space">
          <h2 class="header">Design Strategy</h2>
          <h3>Problem Statement</h3>
          <p>Individuals from different language backgrounds find it difficult to read, speak, and translate the two languages that the Eat More Korean menu is written in.</p>
        </div>
        <div class="block_space">
          <h2>User goals</h2>
          <p><b>What can I do to address the problem?</b> Create a kiosk app that eliminates the issue of miscommunication in turn making the process of ordering more efficient.</p>
          <div class="flex-column">
            <p>3 participants complemented an open cart sort</p>
            <p>This open card sort helped me generate ideas on how to organize content based on how the participants classify in their minds.</p>
            <p>I explained to the participants that they had to name each category and organize the cards into the categories they felt was most appropriate.</p>
          </div>
        </div>
        
        <div class="infocards"></div>
        
        <div class="block_space">
          <h2>User Flow</h2>
          <p>Communicate the intended flow of a user through various pages and actions in an app.</p>
          <div class="userflow"></div>
        </div>

        <div class="block_space">
          <h2 class="header">Prototyping</h2>
          <div class="proto_photo"></div>
          <figcaption><i>The kiosk software used by different businesses showcases the wide range of user interfaces available in the market.</i></figcaption>
          <p class="centered_para">Developing software for custom hardware is a vastly different process compared to creating software for desktop or mobile platforms that are mass-produced for personal use. Custom hardware requires software that is tailored to the specific hardware and its unique interaction and navigation patterns. Hardware peripherals, even if similar in function such as a card reader or receipt printer, will have distinctive physical appearances and locations that require special attention when designing software for them.
            In contrast to mass-produced hardware from industry leaders like Apple and Samsung, custom hardware is likely to have lower production quality. This may result in a subpar user experience due to factors such as poor touch sensitivity and extended hardware production lead times.
          </p>
          
          <p class="centered_para"> <h2>Ipad Ideation</h2>In addition to the financial challenges that non-global franchise restaurants often face, I decided to create a prototype for the iPad Pro 12.9" interface, which is widely accessible and familiar to a large user base. The iPad Pro 12.9" is a popular device used for order-taking in many franchises, making it an obvious choice to include in the design.
            Given that many people are already familiar with the iPad Pro 12.9" interface, designing a user-friendly prototype for this hardware makes it easier for restaurant staff and customers to navigate the interface seamlessly. With the growing importance of technology in the food industry, providing a user-friendly interface can significantly enhance the overall customer experience.
          </p>
          
          <p class="centered_para"><h2>Kiosk Ideation</h2>In case the company wishes to have a personalized kiosk similar to larger franchises, I have created an alternative kiosk prototype that utilizes a screen size of 916px width and 1594px height.</p>
         
          <p class="centered_para"> <h2>Wireframes</h2>This wireframe helps me focus on the functionality of the app while not losing sight of the app interface.</p>
      <div class="flex-row">
          <h2>Ipad</h2>
          <div class="ipad_lofi"></div>
          <h2>Custom Kiosk</h2>
          <div class="kiosk_lofi"></div>
      </div>
        <h2>Logo & Branding</h2>
        <div class="flex-row">
            <div class="typography"></div>
        </div>
        <h2>Hi-Fidelity Designs</h2>
        <div class= "flex-row">
          <div class="hi-fi_one_ipad"></div>
          <div class="hi-fi_three_ipad"></div>
          <div class="hi-fi_five_ipad"></div>
        </div>
        <div class="flex-row">
          <div class="hi-fi_two_ipad"></div> 
          <div class="hi-fi_four_ipad" ></div>
          <div class="hi-fi_six_ipad"></div>
        </div>
      </div>
      <div class="block_space">
        <h2 class="header">Usability Testing</h2>
      </div>
      
    </div>
  );
}

export default Popup;
