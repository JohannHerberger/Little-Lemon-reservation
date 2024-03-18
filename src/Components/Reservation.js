import { useResFormContext } from "../hooks/useResFormContext"
import {FirstPartReservation} from "./firstPartReservation"
import { SecondPartReservation } from "./secondPartReservation"
import { ThirdPartReservation } from "./thirdPartReservation"
import "../styles/reservation.css"

export function Reservation (){

    const { page, setPage, data, setData} = useResFormContext()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPage(page +1)
        setData(data)
    }

    const display = [<FirstPartReservation />, <SecondPartReservation />, <ThirdPartReservation />]

    return(

        <form className="res-form" onSubmit={handleSubmit}>
            {display[page]}
        </form>
    )
}