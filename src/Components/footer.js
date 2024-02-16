import "../styles/footer.css";
import logo from "../images/Logo.svg"

export function Footer (){
    return(
        <footer className="footer">
            <div>
                <img src={logo} alt="logo" />
                <a>Navigation</a>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <a>Contact</a>
                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <a>Social Media links</a>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}