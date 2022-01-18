import React from "react";
import reactLogo from "../images/logo192.png";

function Header() {
    return (
      <header>
        <nav className='my-nav-bar'>
          <img src={reactLogo} className='logo' alt="default React logo"/>
          <ul className='nav-items'>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;