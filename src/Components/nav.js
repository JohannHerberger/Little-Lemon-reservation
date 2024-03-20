import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../images/icons8-hamburger-50.png"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import cross from "../images/close.png"

export function Nav (){
  const [mobileNav, setMobileNav] = useState(false)

    return(
        <nav>
          <div className="navbar">
            <img className={mobileNav ? "mobilePassiv": "logo-nav"} src={logo} alt="logo"></img>
            <button onClick={() => setMobileNav(true)} className={mobileNav ? "mobilePassiv": "toggle-button"}>
                <img className="hamburger" src={hamburger} />
            </button>
            <ul className="navigation-elements">
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className="nav-link">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservation" className="nav-link">Reservation</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
          </div>
          <div className={mobileNav ? "mobile": "mobilePassiv"}>
            <button onClick={() => setMobileNav(false)} className={mobileNav ? "toggle-button": "mobilePassiv"}>
                <img className="close" src={cross} />
            </button>
            <ul className="mobile-navigation-elements">
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className="nav-link">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservation" className="nav-link">Reservation</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
            <img className={mobileNav ? "logo-nav-mobile": "mobilePassiv"} src={logo} alt="logo"></img>
          </div>
        </nav>
    )
}