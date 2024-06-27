import { useResFormContext } from "../../hooks/useResFormContext"
import {FirstPartReservation} from "./firstPartReservation"
import { SecondPartReservation } from "./secondPartReservation"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../styles/reservation.css"

export function Reservation (){

    const form = useRef();

    const { page, setPage } = useResFormContext()

    //Function to send emails via emailjs
    const sendEmail = (e) => {
      e.preventDefault();

      setPage(true)
      localStorage.clear("data")
      localStorage.clear("page")

      emailjs
        .sendForm('service_anee7go', 'template_wj8zkrh', form.current, {
          publicKey: 'jx4j5NMKeO7tMU1DT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
      );
    };

    return(
        <form onSubmit={sendEmail} ref={form} id="/reservation" className="res-form" >
            <h1 className="res-heading">Reservation</h1>
            <h2 className="res-sub-heading">Reserve a table</h2>
            <FirstPartReservation />
            <SecondPartReservation />
        </form>
    )
}