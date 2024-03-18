import { createContext, useState } from "react";
import { Reservation } from "../Components/Reservation";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ReservationFormContext = createContext()

export const ReservationFormProvider = ({children}) =>{

    const [page, setPage] = useState(0)

    const [data, setData] = useState({
        date: "",
        time: "",
        occasion: "",
        guests: 1,
        firstName: "",
        secondName: "",
        email: "",
        phoneNumber: "",
    });

    const handleData = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleNext = ()=>{
        setPage(page +1)
    }

    const handlePrev = () =>{
        setPage(page -1)
    }

    console.log(page)

    return(
        <ReservationFormContext.Provider value={{page, setPage, handleNext, handlePrev, data, setData, handleData}}>
            <Reservation />
        </ReservationFormContext.Provider>
    )
}
