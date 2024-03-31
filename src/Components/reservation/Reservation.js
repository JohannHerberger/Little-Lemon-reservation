import { useResFormContext } from "../../hooks/useResFormContext"
import {FirstPartReservation} from "./firstPartReservation"
import { SecondPartReservation } from "./secondPartReservation"
import { ThirdPartReservation } from "./thirdPartReservation"
import "../../styles/reservation.css"

export function Reservation (){

    const { page } = useResFormContext()

    const display = [<FirstPartReservation />, <SecondPartReservation />, <ThirdPartReservation />]

    return(
        <div className="res-form" >
            {display[page]}
        </div>
    )
}