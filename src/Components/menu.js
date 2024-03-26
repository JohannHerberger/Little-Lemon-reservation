import "../styles/menu.css"
import down from "../images/icons8-down-arrow-50.png"
import up from "../images/icons8-arrow-up-50.png"
import { useState } from "react"
import instagram from "../images/Instagram_Glyph_Gradient.png"

export function Menu (){
    const[apt1, setApt1] = useState(false)
    const[apt2, setApt2] = useState(false)
    const[apt3, setApt3] = useState(false)
    const[apt4, setApt4] = useState(false)
    const[apt5, setApt5] = useState(false)

    const [main1, setMain1] = useState(false)
    const [main2, setMain2] = useState(false)
    const [main3, setMain3] = useState(false)
    const [main4, setMain4] = useState(false)
    const [main5, setMain5] = useState(false)
    const [main6, setMain6] = useState(false)
    const [main7, setMain7] = useState(false)
    const [main8, setMain8] = useState(false)
    const [main9, setMain9] = useState(false)

    const [dessert1, setDessert1] = useState(false)
    const [dessert2, setDessert2] = useState(false)
    const [dessert3, setDessert3] = useState(false)
    const [dessert4, setDessert4] = useState(false)
    const [dessert5, setDessert5] = useState(false)

    const [bev1, setBev1] = useState(false)
    const [bev2, setBev2] = useState(false)
    const [bev3, setBev3] = useState(false)
    const [bev4, setBev4] = useState(false)


    return(
        <div className="menu-container">
            <div className="menu-appetizers">
                <header>
                    <h1 className="menu-headings">Appetizers</h1>
                </header>
                <button onClick={()=>setApt1(!apt1)} className={apt1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={apt1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setApt2(!apt2)} className={apt2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={apt2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setApt3(!apt3)} className={apt3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={apt3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setApt4(!apt4)} className={apt4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={apt4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setApt5(!apt5)} className={apt5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={apt5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
            </div>
            <div className="menu-main-dish">
                <header>
                    <h1 className="menu-headings">Main dish</h1>
                </header>
                <button onClick={()=>setMain1(!main1)} className={main1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain2(!main2)} className={main2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain3(!main3)} className={main3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain4(!main4)} className={main4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main4? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain5(!main5)} className={main5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain6(!main6)} className={main6 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main6 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main6 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain7(!main7)} className={main7 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main7 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main7 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain8(!main8)} className={main8 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main8 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main8 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setMain9(!main9)} className={main9 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={main9 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main9 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
            </div>
            <div className="menu-desserts">
                <header>
                    <h1 className="menu-headings">Desserts</h1>
                </header>
                <button onClick={()=>setDessert1(!dessert1)} className={dessert1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setDessert2(!dessert2)} className={dessert2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setDessert3(!dessert3)} className={dessert3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setDessert4(!dessert4)} className={dessert4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setDessert5(!dessert5)} className={dessert5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
            </div>
            <div className="menu-beverages">
                <header>
                    <h1 className="menu-headings1">Homemade beverages</h1>
                </header>
                <button onClick={()=>setBev1(!bev1)} className={bev1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={bev1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setBev2(!bev2)} className={bev2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={bev2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setBev3(!bev3)} className={bev3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={bev3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
                <button onClick={()=>setBev4(!bev4)} className={bev4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Vitello Tornato
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={bev4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        This is the wrong thing todo, cause everything is nothing
                        and my eggs are way bigger than yours.
                    </div>
                </button>
            </div>
        </div>
    )
}