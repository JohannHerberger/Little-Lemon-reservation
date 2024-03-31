import { useResFormContext } from "../../hooks/useResFormContext";
import "../../styles/reservation.css"
import restaurant from "../../images/shawnanggg-nmpW_WwwVSc-unsplash.jpg"
import { useEffect } from "react";


export function FirstPartReservation (){

    const {data, handleData, handleNext,setPage, page} = useResFormContext()

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPage(page+1)
    }

    /*set date input min correct if time is over 17:00 */
    const date = new Date();
    const time = date.getHours();
    const dateJson = new Date().toJSON().slice(0, 10)

    function addDays(days) {
        var result = new Date();
        result.setDate(result.getDate() + days);
        return result;
    }

    const date1Json = addDays(1).toJSON().slice(0,10)


    return (
        <form onSubmit={handleSubmit} className="res-background">
            <div className="res-container1">
                <header className="res-header">
                    <h2 className="res-heading">Details</h2>
                </header>
                <label htmlFor="res-date">Choose date*</label>
                <input min={time > 17 ? date1Json: dateJson} required className="res-date-element" onChange={handleData} name="date" value={data.date} type="date" id="res-date" />
                <label htmlFor="res-time">Choose time*</label>
                <select className="res-sel-element" value={data.time} name="time" onChange={handleData} id="res-time ">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <label htmlFor="guests">Amount of guests*</label>
                <input className="res-input-element" value={data.guests} onChange={handleData} name="guests" type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion*</label>
                <select className="res-sel-element" value={data.occasion} onChange={handleData} name="occasion" id="occasion">
                    <option value="no special occasion">no special occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversery">Anniversary</option>
                </select>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button className="next-button" type="submit">continue</button>
            </div>
        </form>
    )
}