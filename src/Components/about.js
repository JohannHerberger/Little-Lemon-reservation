import "../styles/about.css"
import chefs from "../images/Mario and Adrian A.jpg"
import mario from "../images/restaurant chef B.jpg"
import { useNavigate } from "react-router-dom"

export function About (){
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo(0,0)
        navigate("/contact")
    } ;

    return(
        <div className="about-container">
            <div className="about-header">
                <img src={chefs} className="about-head-img" />
                <header >
                    <h1 className="about-heading">Little Lemon</h1>
                    <h3 className="about-sub-heading">Mario and Adrian</h3>
                    <a className="about-head-text">
                    Mario and Adrian, two passionate chefs with a shared vision, are the proud owners 
                    of Little Lemon restaurant in the heart of Chicago. With their roots in Mediterranean 
                    cuisine, they have made it their mission to offer their guests an unforgettable culinary experience.
                    </a>
                </header>
                <div style={{width:"10px"}}></div>
            </div>
            <div className="about-main">
                <img className="about-main-img" src={mario}/>
                <a className="about-main-text">
                In the heart of <span className="about-main-color">Chicago</span>, the Mediterranean restaurant "Little Lemon" 
                shines as a shining jewel of gastronomy, run by the talented 
                chefs <span className="about-main-color">Mario</span> and <span className="about-main-color">Adrian</span>. With 
                their passion for Mediterranean cuisine 
                and their commitment to excellent service, they have created a place that seduces the senses and captures 
                the hearts of their guests.
                <p></p>
                In the dishes created by Mario, <span className="about-main-color">traditional</span> Mediterranean flavors merge with modern 
                culinary innovations to create true taste experiences. From delicate seafood paellas to delicious grilled lamb with 
                aromatic herbs, every dish at Little Lemon pays homage to the diversity and finesse 
                of <span className="about-main-color">Mediterranean cuisine</span>. Adrian, the charismatic host, 
                welcomes guests with open arms and ensures that their stay is an <span className="about-main-color">unforgettable</span> experience. 
                His warm hospitality and sense of detail give the restaurant a welcoming atmosphere that makes 
                every guest feel at <span className="about-main-color">home</span>.
                <p></p>
                Together, Mario and Adrian form an unbeatable team that captures the essence of the 
                Mediterranean and expresses it in every aspect of their restaurant - from the elegant décor to the lovingly 
                prepared dishes. At <span className="about-main-color">"Little Lemon"</span>, guests experience not just a meal, but a culinary journey through the 
                sun-drenched coastal regions of the Mediterranean that will keep them coming back again and again.
                </a>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <button className="about-button" onClick={handleClick}>
                        Contact us
                    </button>
                </div>
            </div>
        </div>
    )
}