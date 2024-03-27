import { createContext, useState } from "react";
import { Reservation } from "../Components/reservation/Reservation";

export const ReservationFormContext = createContext()

export const ReservationFormProvider = ({children}) =>{

    const getp = localStorage.getItem("page")

    const [page, setPage] = useState(JSON.parse(getp)||0)

    const today = new Date();
    const date = today.setDate(today.getDate()+1);
    const defaultValue = new Date(date).toISOString().split('T')[0]

    const dataStart = {date: defaultValue, time: "", occasion: "", guests: 1, firstName: "", secondName: "", email: "", phoneNumber: ""}

    const getd = localStorage.getItem("data")

    const [data, setData] = useState(JSON.parse(getd)||dataStart);

    const handleData = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleNext = ()=>{
        setPage(page +1)
        localStorage.setItem("page", JSON.stringify(page +1))
    }

    const handlePrev = () =>{
        setPage(page -1)
        localStorage.setItem("page", JSON.stringify(page -1))
    }

    return(
        <ReservationFormContext.Provider value={{page, setPage, handleNext, handlePrev, data, setData, handleData}}>
            <Reservation />
        </ReservationFormContext.Provider>
    )
}
