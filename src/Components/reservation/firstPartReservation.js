import { useResFormContext } from "../../hooks/useResFormContext";
import "../../styles/reservation.css"
import restaurant from "../../images/shawnanggg-nmpW_WwwVSc-unsplash.jpg"
import { useEffect } from "react";


export function FirstPartReservation (){

    const {data, handleData, handleNext,setData} = useResFormContext()

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])

    return (
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundImage:`url(${restaurant})`, backgroundSize:"100%", height:"100%",backgroundPosition:"center"}}>
            <div className="res-container1">
                <header className="res-header">
                    <h2 className="res-heading">Reservation details</h2>
                </header>
                <label htmlFor="res-date">Choose date</label>
                <input className="res-date-element" onChange={handleData} name="date" value={data.date} type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select className="res-sel-element" value={data.time} name="time" onChange={handleData} id="res-time ">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <label htmlFor="guests">Amount of guests</label>
                <input className="res-input-element" value={data.guests} onChange={handleData} name="guests" type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select className="res-sel-element" value={data.occasion} onChange={handleData} name="occasion" id="occasion">
                    <option value="no special occasion">no special occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversery">Anniversary</option>
                </select>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button className="next-button" onClick={handleNext} type="button">continue</button>
            </div>
        </div>
    )
}