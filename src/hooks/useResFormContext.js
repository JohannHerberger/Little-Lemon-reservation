import { useContext } from "react";
import { ReservationFormContext } from "../Context/ReservationFormContext";

export const useResFormContext = ()=>{
    return useContext(ReservationFormContext)
}
