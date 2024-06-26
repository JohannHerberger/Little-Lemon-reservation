import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../icons/icons8-hamburger-50.png"
import { Link } from "react-scroll"
import { useState } from "react"
import cross from "../icons/close.png"

export function Nav (){
  const [mobileNav, setMobileNav] = useState(false)

    return(
        <nav>
          <div className="navbar">
                <img className="logo-nav" src={logo} alt="logo"></img>
                <button onClick={() => setMobileNav(true)} className={mobileNav ? "passiv": "toggle-button"}>
                    <img className="hamburger" src={hamburger} />
                </button>
                <ul className="navigation-elements">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="nav-link">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservation" className="nav-link">Reservation</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={mobileNav ? "mobile-active": "passiv"}>
                <button onClick={() => setMobileNav(false)} className={mobileNav ? "toggle-button1": "passiv"}>
                    <img className="close" src={cross} />
                </button>
                <img className={mobileNav ? "logo-nav-mobile": "mobilePassiv"} src={logo} />
                <ul className="mobile-navigation-elements">
                    <li>
                        <Link onClick={() => setMobileNav(true)} to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMobileNav(true)}  to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMobileNav(true)}  to="/menu" className="nav-link">Menu</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMobileNav(true)}  to="/reservation" className="nav-link">Reservation</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMobileNav(true)}  to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}