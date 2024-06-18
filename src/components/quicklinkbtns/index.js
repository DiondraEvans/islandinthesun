import './index.css';
import React from 'react';


function Quicklinkbtns(props) {  
    
    return (
        <div className="quicklinkbtns"> 
            <a href="https://timely-flan-0e0f4c.netlify.app/" className ="live-site">Live Site</a>
            <a href="https://www.figma.com/proto/Ut6vvBVUgqPoGze80wBr33/BookClub-prototype?page-id=0%3A1&node-id=2%3A1137&viewport=282%2C237%2C0.07&scaling=scale-down-width&starting-point-node-id=2%3A1137" className="prototype"> Prototype </a>
            <a href="https://github.com/Diondraj/Bookclub" className="github-code">github code</a>
        </div>
    );
}

export default Quicklinkbtns;