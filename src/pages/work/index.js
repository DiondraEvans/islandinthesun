import { useState, useEffect} from 'react';
import './index.css';
import Nav from '../../components/nav';
import Process from '../../components/Process'


const GetWork = () => {
  
   
return (
     <div> 
      <Nav />
      <div class="Hero-webdesign">
          <h1>Web Strategy, Design, & Development</h1>
          <p>Offering a complete package of services, covering online strategy, visual design, and technical implementation. Our expertise lies in crafting captivating interactive experiences that seamlessly work across various devices, providing exceptional solutions for our valued clients.</p>
      </div>
      < Process />
     </div>  
      
);
}
  
  export default GetWork;