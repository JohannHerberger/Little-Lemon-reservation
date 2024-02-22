import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../images/icons8-hamburger-50.png"
import { Link } from "react-router-dom"

export function Nav (){
    return(
        <nav className="navbar">
            <img className="logo-nav" src={logo} alt="logo"></img>
            <button className="toggle-button">
                <img className="hamburger" src={hamburger} />
            </button>
            <ul className="navigation-elements">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link className="nav-link">About</Link>
                </li>
                <li>
                    <Link className="nav-link">Menu</Link>
                </li>
                <li>
                    <Link to="/Reservation" className="nav-link">Reservation</Link>
                </li>
                <li>
                    <Link className="nav-link">Order online</Link>
                </li>
                <li>
                    <Link className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    )
}