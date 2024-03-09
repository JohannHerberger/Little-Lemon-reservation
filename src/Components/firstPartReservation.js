import { useResFormContext } from "../hooks/useResFormContext"


export function FirstPartReservation (){

    const {data, handleData, handleNext} = useResFormContext()

    return (
        <div className="first-res-form">
                <label htmlFor="res-date">Choose date</label>
                <input onChange={handleData} name="date" value={data.date} type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select value={data.time} name="time" onChange={handleData} id="res-time ">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                <label htmlFor="guests">Amount of guests</label>
                <input value={data.guests} onChange={handleData} name="guests" type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select value={data.occasion} onChange={handleData} name="occasion" id="occasion">
                    <option value="no special occasion">no special occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversery">Anniversary</option>
                </select>
                <button onClick={handleNext} type="button">Next</button>
        </div>
    )
}