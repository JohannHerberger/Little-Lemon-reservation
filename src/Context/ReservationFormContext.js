import { createContext, useState } from "react";
import { Reservation } from "../Components/old res/Reservation";

export const ReservationFormContext = createContext()

export const ReservationFormProvider = ({children}) =>{

    const [page, setPage] = useState(0)

    const today = new Date();
    const date = today.setDate(today.getDate()+1);
    const defaultValue = new Date(date).toISOString().split('T')[0]

    const [data, setData] = useState({
        date: defaultValue,
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
        return setPage(page +1)
    }

    const handlePrev = () =>{
        return setPage(page -1)
    }

    return(
        <ReservationFormContext.Provider value={{page, setPage, handleNext, handlePrev, data, setData, handleData}}>
            <Reservation />
        </ReservationFormContext.Provider>
    )
}
