import { useResFormContext } from "../../hooks/useResFormContext"
import {FirstPartReservation} from "./firstPartReservation"
import { SecondPartReservation } from "./secondPartReservation"
import { ThirdPartReservation } from "./thirdPartReservation"
import "../../styles/reservation.css"

export function Reservation (){

    const { page } = useResFormContext()

    const display = [<FirstPartReservation />, <SecondPartReservation />, <ThirdPartReservation />]

    return(
        <div id="/reservation" className="res-form" >
            <h1 className="res-heading">Reservation</h1>
            <h2 className="res-sub-heading">Reserve a table</h2>
            {display[page]}
        </div>
    )
}