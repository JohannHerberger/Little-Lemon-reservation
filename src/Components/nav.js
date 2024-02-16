import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../images/icons8-hamburger-50.png"

export function Nav (){
    return(
        <nav className="navbar">
            <img className="logo-nav" src={logo} alt="logo"></img>
            <button className="toggle-button">
                <img className="hamburger" src={hamburger} />
            </button>
            <ul className="navigation-elements">
                <li>
                    <a className="nav-link">Home</a>
                </li>
                <li>
                    <a className="nav-link">About</a>
                </li>
                <li>
                    <a className="nav-link">Reservation</a>
                </li>
                <li>
                    <a className="nav-link">Order online</a>
                </li>
                <li>
                    <a className="nav-link">Login</a>
                </li>
            </ul>
        </nav>
    )
}