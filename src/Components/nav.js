import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../images/icons8-hamburger-50.png"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import cross from "../images/close.png"

export function Nav (){
  const [mobileNav, setMobileNav] = useState(false)

  function MobileNav(){
    return (
        window.scrollTo(0,0),
        setMobileNav(false)
    )
  }

    return(
        <nav>
          <div className="navbar">
            <img className="logo-nav" src={logo} alt="logo"></img>
            <button onClick={() => setMobileNav(true)} className={mobileNav ? "mobile": "toggle-button"}>
                <img className="hamburger" src={hamburger} />
            </button>
            <ul className="navigation-elements">
                <li>
                    <NavLink onClick={()=>window.scrollTo(0,0)} to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>window.scrollTo(0,0)} to="/about" className="nav-link">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>window.scrollTo(0,0)} to="/menu" className="nav-link">Menu</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>window.scrollTo(0,0)}to="/reservation" className="nav-link">Reservation</NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>window.scrollTo(0,0)} to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
          </div>
          <div className={mobileNav ? "mobile active": "mobile"}>
            <button onClick={() => setMobileNav(false)} className={mobileNav ? "toggle-button1": "mobile"}>
                <img className="close" src={cross} />
            </button>
            <img className={mobileNav ? "logo-nav-mobile": "mobilePassiv"} src={logo} alt="logo"></img>
            <ul className="mobile-navigation-elements">
                <li>
                    <NavLink onClick={() => MobileNav()} to="/" className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => MobileNav()} to="/about" className="nav-link">About</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => MobileNav()} to="/menu" className="nav-link">Menu</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => MobileNav()} to="/reservation" className="nav-link">Reservation</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => MobileNav()} to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
          </div>
        </nav>
    )
}