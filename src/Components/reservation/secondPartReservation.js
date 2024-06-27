import emailjs from '@emailjs/browser';
import { useResFormContext } from "../../hooks/useResFormContext"
import "../../styles/reservation.css"
import { useEffect } from "react"

export function SecondPartReservation (){

    const {data, handleData, page, setPage} = useResFormContext()

    //Local storage
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])

    useEffect(()=>{
        localStorage.setItem("page", JSON.stringify(page))
    },[page])

    return(
        <div className={page ? "off" : ""}>
            <div className="res-background">
                <div className="res-container">
                    <label htmlFor="firstName">First name*</label>
                    <input placeholder="f.e.: Max" required className="res-input-element" value={data.firstName} onChange={handleData} type="text" id="firstName" name="firstName" />
                    <label htmlFor="secondName">Second name*</label>
                    <input placeholder="f.e.: Mustermann" required className="res-input-element" value={data.secondName} onChange={handleData} type="text" id="secondName" name="secondName" />
                    <label htmlFor="email">Email*</label>
                    <input placeholder="example@gmail.com" required className="res-input-element" value={data.email} onChange={handleData} type="email" id="email" name="email" />
                    <label htmlFor="phoneNumber">Phone number<a className="res-optional">*optional*</a></label>
                    <input className="res-input-element" value={data.phoneNumber} onChange={handleData} type="text" id="phoneNumber" name="phoneNumber" />
                </div>
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <button className="next-button1" onClick={()=> setPage(true)} type="button">
                        back
                    </button>
                    <input value="Send" className="next-button1" type="submit" />
                </div>
            </div>
        </div>
    )
}