import "../../styles/reservation.css"
import { useResFormContext } from "../../hooks/useResFormContext"
import  checkHaken  from "../../icons/hook-7300191_640.png"

export function ThirdPartReservation (){
    const { data } = useResFormContext();

    return (
        <div className="res-container2">
            <div className="res-container3">
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <h2 className="res-end-heading">
                        Your reservation is confirmed, {data.firstName}!
                    </h2>
                    <img src={checkHaken} className="res-haken"/>
                </div>
                <a className="res-end-text">You will shortly receive a confirmation email to <a className="res-mail">{data.email}</a> containing all the details of your reservation.</a>
            </div>
            <button className="back-home-button">Back to Home</button>
        </div>
    )
}