import React from "react"

function Header() {
    return (
      <header>
        <nav className='my-nav-bar'>
          <img src={require("./logo192.png")} className='logo' alt="default React logo"/>
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