import React from "react";
import logo from '../image/brand_logo.png'
const Navigation=()=>{
    return(
        <nav className="container">
        <div className="logo">
            <img src={logo} alt='brand logo'/>
             
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    )
}

export default Navigation