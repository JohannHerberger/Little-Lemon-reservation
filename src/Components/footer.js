import "../styles/footer.css";
import logo from "../images/logo2.png"
import { Link } from "react-scroll";

export function Footer (){

    return(
        <footer className="footer">
            <hr className="line"></hr>
            <div className="footer-real">
                <img className="logo-footer" src={logo} alt="logo" />
                <div className="footer-container">
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="subtitle-footer">
                                Navigation
                            </li>
                            <li>
                                <Link className="footer-hover" to="/" style={{color:"black", textDecoration:"none"}}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-hover" to="/about" style={{color:"black", textDecoration:"none"}}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-hover" to="/menu" style={{color:"black", textDecoration:"none"}}>
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-hover" to="/reservation" style={{color:"black", textDecoration:"none"}}>
                                    Reservation
                                </Link>
                            </li>
                            <li>
                                <Link className="footer-hover" to="/contact" style={{color:"black", textDecoration:"none"}}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="subtitle-footer">
                                Contact
                            </li>
                            <li>
                                +1 177 6921 941
                            </li>
                            <li>
                                littleLemon@gmail.com
                            </li>
                            <li>
                                10 S Wacker Dr, Chicago, IL 60606, USA
                            </li>
                        </ul>
                    </div>
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="subtitle-footer">
                                Social Media links
                            </li>
                            <li>
                                <a className="footer-hover" href="https://www.facebook.com/?locale=de_DE" style={{color:"black", textDecoration:"none"}}>Facebook</a>
                            </li>
                            <li>
                                <a className="footer-hover" href="https://www.instagram.com/" style={{color:"black", textDecoration:"none"}}>Instagram</a>
                            </li>
                            <li>
                                <a className="footer-hover" href="https://twitter.com/?lang=de" style={{color:"black", textDecoration:"none"}}>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}