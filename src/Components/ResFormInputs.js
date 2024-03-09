import {FirstPartReservation} from "./firstPartReservation"
import { useResFormContext } from "../hooks/useResFormContext"
import { SecondPartReservation } from "./secondPartReservation"
import { ThirdPartReservation } from "./thirdPartReservation"

export function ResFormInputs (){

    const { page } = useResFormContext()

    const display = [<FirstPartReservation />, <SecondPartReservation />, <ThirdPartReservation />]

    return(
        <div>
            {display[page]}
        </div>
    )
}