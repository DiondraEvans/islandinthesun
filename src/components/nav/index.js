import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
return (
    <div class="Nav">
        <Link to='/#categoryList'><div>Portfolio</div></Link>
       <Link to='/Work'> <div>Work with me</div></Link>
       <Link to= "/#about"> <div>About</div></Link>
        <div><a class="Contact" href="/Contact">Contact</a></div>
    </div>
)
}

export default Nav;