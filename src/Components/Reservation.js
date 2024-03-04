import {ReservationForm} from "./ReservationForm"
import { useState } from "react"
import "../styles/reservation.css"

export function Reservation (){
    const [date, setDate] = useState(localStorage.getItem("date")||"")
    const [time,setTime] = useState(localStorage.getItem("time")||"17:00")
    const [occasion, setOccasion] = useState(localStorage.getItem("occasion")||"Birthday")
    const [guests, setGuests] = useState(localStorage.getItem("guests")||1)

    function handleDate (val){
        return setDate(val)
    }

    function handleTime (val){
        return setTime(val)
    }

    function handleGuests (val){
        return setGuests(val)
    }

    function handleOccasion (val){
        return setOccasion(val)
    }

    return(
        <>
            <ReservationForm date={date} handleDate={handleDate} time= {time} handleTime={handleTime} guests={guests} handleGuests={handleGuests} occasion={occasion} handleOccasion={handleOccasion}/>
        </>
    )
}