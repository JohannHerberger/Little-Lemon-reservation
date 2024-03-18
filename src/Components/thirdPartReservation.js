import "../styles/reservation.css"
import { useResFormContext } from "../hooks/useResFormContext"
import  checkHaken  from "../images/hook-7300191_640.png"
import { useNavigate } from "react-router-dom";

export function ThirdPartReservation (){
    const data = useResFormContext();

    const navigate = useNavigate()

    return (
        <>
            <div className="res-container2">
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h2 className="res-end-heading">
                        Your reservation is confirmed,{data.firstName}!
                    </h2>
                    <img src={checkHaken} className="res-haken"/>
                </div>
                <a className="res-end-text">You will shortly receive a confirmation email to {data.email} containing all the details of your reservation</a>
                <button onClick={()=> navigate("/")} className="back-home-button">Back to Home</button>
            </div>
        </>
    )
}