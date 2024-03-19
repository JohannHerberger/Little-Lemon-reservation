import { useResFormContext } from "../../hooks/useResFormContext"
import "../../styles/reservation.css"
import restaurantChef from "../../images/restaurant chef B.jpg"

export function SecondPartReservation (){

    const {data, handleData, handlePrev} = useResFormContext()

    return(
        <div className="sec-res-form">
            <header className="res-header">
                <h2 className="res-heading">About you</h2>
            </header>
            <div className="res-inp-img-cont">
                <div className="res-container1">
                    <label htmlFor="firstName">First name</label>
                    <input required className="res-input-element" value={data.firstName} onChange={handleData} type="text" id="firstName" name="firstName" />
                    <label htmlFor="secondName">Second name</label>
                    <input required className="res-input-element" value={data.secondName} onChange={handleData} type="text" id="secondName" name="secondName" />
                    <label htmlFor="email">Email</label>
                    <input required className="res-input-element" value={data.email} onChange={handleData} type="email" id="email" name="email" />
                    <label htmlFor="phoneNumber">Phone number<a className="res-optional">*optional*</a></label>
                    <input className="res-input-element" value={data.phoneNumber} onChange={handleData} type="text" id="phoneNumber" name="phoneNumber" />
                </div>
                <img src={restaurantChef} className="res-img1"/>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button className="next-button1" onClick={handlePrev} type="button">
                    go back
                </button>
                <button className="next-button1" type="submit">Submit</button>
            </div>
        </div>
    )
}