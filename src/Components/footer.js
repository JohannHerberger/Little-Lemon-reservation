import "../styles/footer.css";
import logo from "../images/logo2.png"

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
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservation</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="subtitle-footer">
                                Contact
                            </li>
                            <li>Adress</li>
                            <li>Phone number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className="footer-wrapper">
                        <ul className="footer-list">
                            <li className="subtitle-footer">
                                Social Media links
                            </li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}