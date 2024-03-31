import "../styles/menu.css"
import down from "../icons/down(1).png"
import up from "../icons/upload.png"
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
                            <a className="menu-price">$8.99</a>
                            <img src={apt1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Tender, thinly sliced ​​slices of cooked veal are artfully arranged on a plate and coated in a rich tuna sauce.
                    </div>
                </button>
                <button onClick={()=>setApt2(!apt2)} className={apt2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Gazpacho
                        <div className="menu-item-container">
                            <a className="menu-price">$5.50</a>
                            <img src={apt2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A refreshing cold tomato soup, perfect for warmer days. This gazpacho is made from ripe tomatoes, 
                        refined with olive oil, vinegar and spices.
                    </div>
                </button>
                <button onClick={()=>setApt3(!apt3)} className={apt3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Grilled shrimp skewers
                        <div className="menu-item-container">
                            <a className="menu-price">$7.99</a>
                            <img src={apt3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Juicy shrimp are strung on wooden skewers, brushed with a marinade made from chopped garlic, 
                        fresh lemon juice, olive oil and Mediterranean herbs
                    </div>
                </button>
                <button onClick={()=>setApt4(!apt4)} className={apt4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Calamari alla Griglia
                        <div className="menu-item-container">
                            <a className="menu-price">$6.99</a>
                            <img src={apt4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Tender calamari rings marinated in a blend of olive oil, garlic, lemon juice and fresh herbs, 
                        then grilled for a delicious smoky touch. Served with a side of spicy aioli dip for an added kick.
                    </div>
                </button>
                <button onClick={()=>setApt5(!apt5)} className={apt5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Hummus plate
                        <div className="menu-item-container">
                            <a className="menu-price">$5.50</a>
                            <img src={apt5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={apt5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Homemade hummus, flavored with roasted garlic, lemon juice and extra virgin olive oil, 
                        is arranged on a plate and served with a selection of Mediterranean sides such as marinated olives, 
                        pickled artichoke hearts, roasted red pepper strips and warm pita bread.
                    </div>
                </button>
            </div>
            <div className="menu-main-dish">
                <header>
                    <h1 className="menu-headings">Main dish</h1>
                </header>
                <button onClick={()=>setMain1(!main1)} className={main1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Grilled sea bream
                        <div className="menu-item-container">
                            <a className="menu-price">$18.99</a>
                            <img src={main1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Fresh sea bream fillets are grilled to perfection on the grill and then drizzled with a delicious lemon-herb butter. 
                        Served with a Mediterranean vegetable ragout made from zucchini, peppers, tomatoes and olives.
                    </div>
                </button>
                <button onClick={()=>setMain2(!main2)} className={main2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Lamb chops 
                        <div className="menu-item-container">
                            <a className="menu-price">$21.99</a>
                            <img src={main2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Juicy lamb chops are marinated with garlic, rosemary and olive oil, grilled and served with 
                        crispy rosemary potatoes and a refreshing cucumber salad.
                    </div>
                </button>
                <button onClick={()=>setMain3(!main3)} className={main3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Pasta Puttanesca
                        <div className="menu-item-container">
                            <a className="menu-price">$15.99</a>
                            <img src={main3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Pasta cooked al dente and tossed with a spicy tomato sauce with capers, olives, anchovies and garlic. 
                        A simple but flavorful dish that perfectly captures the flavors of the Mediterranean.
                    </div>
                </button>
                <button onClick={()=>setMain4(!main4)} className={main4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Paella seafood
                        <div className="menu-item-container">
                            <a className="menu-price">$19.99</a>
                            <img src={main4? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A rich, aromatic paella prepared with saffron-colored rice, shrimp, mussels, squid and other seafood, 
                        and a variety of Mediterranean spices. A real highlight of Spanish cuisine.
                    </div>
                </button>
                <button onClick={()=>setMain5(!main5)} className={main5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Greek gyros
                        <div className="menu-item-container">
                            <a className="menu-price">$16.99</a>
                            <img src={main5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Juicy marinated pork or chicken is grilled and served with fresh tzatziki, tomatoes, 
                        onions and parsley in warm pita bread.
                    </div>
                </button>
                <button onClick={()=>setMain6(!main6)} className={main6 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Chicken Saltimbocca
                        <div className="menu-item-container">
                            <a className="menu-price">$16.50</a>
                            <img src={main6 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main6 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Tender chicken breast fillets are wrapped in sage and cured ham, 
                        braised in a white wine sauce and served with creamy Parmesan risotto.
                    </div>
                </button>
                <button onClick={()=>setMain7(!main7)} className={main7 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Ratatouille polenta
                        <div className="menu-item-container">
                            <a className="menu-price">$15.50</a>
                            <img src={main7 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main7 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A traditional Provençal dish consisting of braised vegetables such as zucchini, eggplant, 
                        peppers and tomatoes, served with creamy polenta and a drizzle of olive oil.
                    </div>
                </button>
                <button onClick={()=>setMain8(!main8)} className={main8 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Moussaka
                        <div className="menu-item-container">
                            <a className="menu-price">$14.99</a>
                            <img src={main8 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main8 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A Greek specialty made with layered minced meat, eggplant, potatoes and a creamy béchamel sauce, 
                        all baked together until golden brown and delicious.
                    </div>
                </button>
                <button onClick={()=>setMain9(!main9)} className={main9 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Stuffed eggplants
                        <div className="menu-item-container">
                            <a className="menu-price">$14.50</a>
                            <img src={main9 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={main9 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Eggplant halves are stuffed with a savory filling of quinoa, chopped vegetables, and feta cheese, 
                        then baked in the oven until tender and flavorful. Served with a fresh salad of rocket and cherry tomatoes.
                    </div>
                </button>
            </div>
            <div className="menu-desserts">
                <header>
                    <h1 className="menu-headings">Desserts</h1>
                </header>
                <button onClick={()=>setDessert1(!dessert1)} className={dessert1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Tiramisu
                        <div className="menu-item-container">
                            <a className="menu-price">$6.50</a>
                            <img src={dessert1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A classic Italian dessert consisting of layers of airy mascarpone cream, ladyfingers soaked 
                        in coffee and amaretto and a generous sprinkling of cocoa powder.
                    </div>
                </button>
                <button onClick={()=>setDessert2(!dessert2)} className={dessert2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Cannoli
                        <div className="menu-item-container">
                            <a className="menu-price">$5.99</a>
                            <img src={dessert2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Crispy, fried dough rolls filled with a creamy ricotta cheese filling, refined with a pinch of vanilla and chocolate chips. 
                        Every bite is a match made in heaven between creamy cheese and crunchy dough.
                    </div>
                </button>
                <button onClick={()=>setDessert3(!dessert3)} className={dessert3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Granita
                        <div className="menu-item-container">
                            <a className="menu-price">$4.50</a>
                            <img src={dessert3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A refreshing Sicilian dessert made from frozen fruit juice sweetened with sugar and 
                        served with a slice of lemon or mint leaves.
                    </div>
                </button>
                <button onClick={()=>setDessert4(!dessert4)} className={dessert4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Panna Cotta
                        <div className="menu-item-container">
                            <a className="menu-price">$7.50</a>
                            <img src={dessert4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Delicate, creamy panna cotta, flavored with vanilla and served with a fruity berry compote made from fresh strawberries, raspberries and blueberries. 
                        An elegant and delicate dessert that strikes the perfect balance between sweet and sour.
                    </div>
                </button>
                <button onClick={()=>setDessert5(!dessert5)} className={dessert5 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Baklava
                        <div className="menu-item-container">
                            <a className="menu-price">$3.99</a>
                            <img src={dessert5 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={dessert5 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        A sweet and crunchy Greek treat consisting of paper-thin layers of filo dough filled with a mixture of 
                        chopped nuts, sugar, cinnamon and honey. Each layer is buttered and baked until golden brown and crispy.
                    </div>
                </button>
            </div>
            <div className="menu-beverages">
                <header>
                    <h1 className="menu-headings1">Homemade lemonades</h1>
                </header>
                <button onClick={()=>setBev1(!bev1)} className={bev1 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Blueberry-lavender
                        <div className="menu-item-container">
                            <a className="menu-price">$6.99</a>
                            <img src={bev1 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev1 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Blueberries are pureed and mixed with lavender syrup and ice. Served in a chilled glass with a 
                        garnish of fresh blueberries and a sprig of lavender.
                    </div>
                </button>
                <button onClick={()=>setBev2(!bev2)} className={bev2 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Lime-mint
                        <div className="menu-item-container">
                            <a className="menu-price">$6.99</a>
                            <img src={bev2 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev2 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Freshly squeezed lime juice is mixed with sparkling mineral water, chopped mint and a touch of honey 
                        or agave syrup. Perfect for hot days, this refreshing drink offers a balanced combination of sweet and sour 
                        flavors with a refreshing mint kick.
                    </div>
                </button>
                <button onClick={()=>setBev3(!bev3)} className={bev3 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Rhubarb-oranges
                        <div className="menu-item-container">
                            <a className="menu-price">$6.99</a>
                            <img src={bev3 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev3 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Fresh rhubarb juice is mixed with freshly squeezed orange juice and sparkling water, 
                        then sweetened with a touch of honey. Served over ice with a garnish of orange slices and rhubarb pieces.
                    </div>
                </button>
                <button onClick={()=>setBev4(!bev4)} className={bev4 ? "menu-item on": "menu-item"}>
                    <div className="menu-item-header">
                        Pomegranate-rosemary
                        <div className="menu-item-container">
                            <a className="menu-price">$6.99</a>
                            <img src={bev4 ? up : down} className="menu-item-icon" />
                        </div>
                    </div>
                    <div className={bev4 ? "menu-text on": "menu-text"}>
                        <div className="menu-line"></div>
                        Fresh pomegranate juice is mixed with a rosemary syrup and sparkling water. 
                        Served over ice with a garnish of pomegranate seeds and a sprig of rosemary.
                    </div>
                </button>
            </div>
        </div>
    )
}