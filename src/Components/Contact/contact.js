import "../../styles/contact.css"
import email from "../../icons/email.png"
import phone from "../../icons/anruf.png"
import shop from "../../icons/elektronik-shop.png"
import  GoogleMap  from "./Map"

export function Contact (){

    return(
        <>
            <main className="contact-container">
                <div className="maps-container">
                    <GoogleMap />
                </div>
                <div className="contact-symbols">
                    <div className="contact-info">
                        <img src={phone} className="contact-icon"/>
                        +1 177 6921 941
                    </div>
                    <div className="contact-info">
                        <img src={email} className="contact-icon"/>
                        littleLemon@gmail.com
                    </div>
                    <div className="contact-info">
                        <img src={shop} className="contact-icon" />
                        Mo.-Sa. 17:00-22:00
                    </div>
                </div>
            </main>
        </>
    )
}