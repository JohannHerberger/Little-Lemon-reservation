import { createContext, useEffect, useState } from "react";
import { Reservation } from "../Components/reservation/Reservation";

export const ReservationFormContext = createContext()

export const ReservationFormProvider = ({children}) =>{

    const getp = localStorage.getItem("page")

    const [page, setPage] = useState(JSON.parse(getp)||0)

    const dataStart = {date: "", time: "", occasion: "", guests: "", firstName: "", secondName: "", email: "", phoneNumber: ""}

    const getd = localStorage.getItem("data")

    const [data, setData] = useState(JSON.parse(getd)||dataStart);

    useEffect(()=>{
        console.log(page)
    },{page})

    const today = new Date();
    const date = today.setDate(today.getDate()+1);
    const defaultValue = new Date(date).toISOString().split('T')[0];

    const handleData = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handlePrev = () =>{
        setPage(page -1)
        localStorage.setItem("page", JSON.stringify(page -1))
    }

    return(
        <ReservationFormContext.Provider value={{page, setPage, handlePrev, data, setData, handleData}}>
            <Reservation />
        </ReservationFormContext.Provider>
    )
}
