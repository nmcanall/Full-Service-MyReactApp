import smallLogo from "../images/react-icon-small.png"

export default function Navbar(props) {

    function handleClick() {
        props.toggleDarkMode(prevState => !prevState);
    }

    return (
         <nav className={props.darkMode ? "dark": ""}>
            <img className="nav--logo_icon" alt="react-logo" src={smallLogo}/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={handleClick}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}