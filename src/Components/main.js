import "../styles/main.css";
import bruchetta from "../images/Bildschirmfoto 2024-02-18 um 16.38.19.png"
import dessert from "../images/lemon dessert.jpg"
import salad from "../images/greekSalad.jpg"
import menuCard from "../images/Dish icon.svg"
import { useNavigate } from "react-router-dom";

export function Main (){
    const navigate = useNavigate();

    return(
        <main className="main">
            <div className="main-head-container">
                <h1 className="main-heading">
                    This month specials!
                </h1>
            </div>
            <div className="main-cont-container">
                <div className="dish-container">
                    <img className="main-pic" src={salad}/>
                    <div className="main-cont-head">
                        <h5>Greek salad</h5>
                        <a className="main-price">$9.99</a>
                    </div>
                    <a className="main-text">
                        The famous greek salad of crspy lettuce, peppers, olives 
                        and our Chicago style feta cheese, garnished with 
                        crunchy garlic and rosmary 
                        croutons.
                    </a>
                    <button onClick={()=>navigate("/menu")} className="main-cont-button1">
                        <a className="delivery-text">View Menu</a>
                        <img className="menu-icon" src={menuCard}/>
                    </button>
                </div>
                <div className="dish-container1">
                    <img className="main-pic" src={bruchetta}/>
                    <div className="main-cont-head">
                        <h5>Bruchetta</h5>
                        <a className="main-price">$6.99</a>
                    </div>
                    <a className="main-text">
                        Our Bruchetta is made from grilled bread that has been 
                        smeared with garlic and 
                        seasoned with salt and olive 
                        oil.
                    </a>
                    <button onClick={()=>navigate("/menu")} className="main-cont-button2">
                        <a className="delivery-text">View Menu</a>
                        <img className="menu-icon" src={menuCard}/>
                    </button>
                </div>
                <div className="dish-container">
                     <img className="main-pic" src={dessert}/>
                    <div className="main-cont-head">
                        <h5>Lemon Dessert</h5>
                        <a className="main-price">$4.99</a>
                    </div>
                    <a className="main-text">
                        This comes straight from 
                        grandma´s recipe book, every
                        last ingredient has been 
                        sourced and is as authentic 
                        as can be imagined.
                    </a>
                    <button onClick={()=>navigate("/menu")} className="main-cont-button">
                        <a>View Menu</a>
                        <img className="menu-icon" src={menuCard}/>
                    </button>
                </div>
            </div>
        </main>
    )
}