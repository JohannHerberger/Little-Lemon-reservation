import { useResFormContext } from "../../hooks/useResFormContext"
import "../../styles/reservation.css"
import restaurant from "../../images/shawnanggg-nmpW_WwwVSc-unsplash.jpg"
import { useEffect } from "react"

export function SecondPartReservation (){

    const {data, handleData, handlePrev, page, setPage} = useResFormContext()

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    },[data])

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPage(page +1)
        localStorage.clear("data")
        localStorage.clear("page")
    }

    return(
        <form onSubmit={handleSubmit} className="res-background">
            <div className="res-container1">
                <header className="res-header">
                    <h2 className="res-heading">About you</h2>
                </header>
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
                <button className="next-button1" onClick={handlePrev} type="button">
                    back
                </button>
                <button className="next-button1" type="submit">Submit</button>
            </div>
        </form>
    )
}