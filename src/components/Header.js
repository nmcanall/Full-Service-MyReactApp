import React from "react";
import reactLogo from "../images/reactjs-icon.png";

function Header() {
    return (
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src={reactLogo} className='react-icon' alt="default React logo"/>
            <h3 className="company-name">Nathan's Tool Shed</h3>
          </div>
          <h3 className="slogan">For all your tool and equipment needs!</h3>
        </nav>
      </header>
    )
}

export default Header;