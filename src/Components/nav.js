import "../styles/nav.css"
import logo from "../images/Logo.svg"
import hamburger from "../images/icons8-hamburger-50.png"

export function Nav (){
    return(
        <nav className="navbar">
            <img className="img" src={logo} alt="logo"></img>
            <button className="toggle-button">
                <img className="hamburger" src={hamburger} />
            </button>
            <ul className="navigation-elements">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Reservation</a>
                </li>
                <li>
                    <a>Order online</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
        </nav>
    )
}