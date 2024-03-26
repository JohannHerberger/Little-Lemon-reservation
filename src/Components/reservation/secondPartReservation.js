import { useResFormContext } from "../../hooks/useResFormContext"
import "../../styles/reservation.css"
import restaurant from "../../images/shawnanggg-nmpW_WwwVSc-unsplash.jpg"
import { useEffect } from "react"

export function SecondPartReservation (){

    const {data, handleData, handlePrev} = useResFormContext()

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])

    return(
        <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundImage:`url(${restaurant})`, backgroundSize:"100%", height:"100%",backgroundPosition:"center"}}>
            <div className="res-container1">
                <header className="res-header">
                    <h2 className="res-heading">About you</h2>
                </header>
                <label htmlFor="firstName">First name</label>
                <input placeholder="Max" required className="res-input-element" value={data.firstName} onChange={handleData} type="text" id="firstName" name="firstName" />
                <label htmlFor="secondName">Second name</label>
                <input placeholder="Mustermann" required className="res-input-element" value={data.secondName} onChange={handleData} type="text" id="secondName" name="secondName" />
                <label htmlFor="email">Email</label>
                <input placeholder="example@gmail.com" required className="res-input-element" value={data.email} onChange={handleData} type="email" id="email" name="email" />
                <label htmlFor="phoneNumber">Phone number<a className="res-optional">*optional*</a></label>
                <input className="res-input-element" value={data.phoneNumber} onChange={handleData} type="text" id="phoneNumber" name="phoneNumber" />
            </div>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <button className="next-button1" onClick={handlePrev} type="button">
                    back
                </button>
                <button className="next-button1" type="submit">Submit</button>
            </div>
        </div>
    )
}