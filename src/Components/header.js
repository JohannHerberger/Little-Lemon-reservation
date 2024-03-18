import "../styles/header.css";
import headerLogo from "../images/Bildschirmfoto 2024-02-16 um 23.33.08.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export function Header (){
    const navigate = useNavigate();

    return(
        <header className="header">
            <div className="header-text-container">
                <h1 className="header-h1">Little Lemon</h1>
                <h3 className="header-h3">Chicago</h3>
                <a className="header-text">
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a mordern twist.
                </a>
                <button onClick={()=>navigate("/reservation")} className="header-button">
                   Reserve a table
                </button>
            </div>
            <img src={headerLogo} className="header-pic"/>
        </header>
    )
}