import { useResFormContext } from "../hooks/useResFormContext"

export function SecondPartReservation (){

    const {data, handleData, handlePrev} = useResFormContext()

    return(
        <div className="sec-res-form">
            <button onClick={handlePrev} type="button">Prev</button>
            <label htmlFor="firstName">First name</label>
            <input value={data.firstName} onChange={handleData} type="text" id="firstName" name="firstName" />
            <label htmlFor="secondName">Second name</label>
            <input value={data.secondName} onChange={handleData} type="text" id="secondName" name="secondName" />
            <label htmlFor="email">Email</label>
            <input value={data.email} onChange={handleData} type="email" id="email" name="email" />
            <label htmlFor="phoneNumber">Phone number</label>
            <input value={data.phoneNumber} onChange={handleData} type="text" id="phoneNumber" name="phoneNumber" />
            <button type="submit">Submit</button>
        </div>
    )
}