import { useEffect } from "react"
import "../styles/reservation.css"


export function ReservationForm ({date, handleDate, time, handleTime, guests, handleGuests, occasion, handleOccasion}){

    useEffect(()=>{
        //local storage
        localStorage.setItem("date",date)
        localStorage.setItem("time",time)
        localStorage.setItem("occasion",occasion)
        localStorage.setItem("guests",guests)
    },[date,time,occasion,guests])

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            date,
            time,
            occasion,
            guests
        })
    }

    return (
        <form onSubmit={handleSubmit} className="reservation-form">
            <label htmlFor="res-date">Choose date</label>
            <input onChange={(event)=> handleDate(event.target.value)}  value={date} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select value={time} onChange={(event=>handleTime(event.target.value))} id="res-time ">
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input value={guests} onChange={(event)=> handleGuests(event.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={(event)=> handleOccasion(event.target.value)} id="occasion">
                <option value="no special occasion">no special occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversery">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}