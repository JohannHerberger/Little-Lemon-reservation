import "../styles/nav.css"
import logo from "../images/Logo.svg"

export function Nav (){
    return(
        <nav className="navbar">
            <div></div>
            <img className="img" src={logo} alt="logo"></img>
            <div className="navigation-elements">
                <a>Home</a>
                <a>About</a>
                <a>Reservation</a>
                <a>Oder Online</a>
                <a>Login</a>
            </div>
            <div></div>
        </nav>
    )
}