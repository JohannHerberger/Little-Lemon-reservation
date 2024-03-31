import { APIProvider,Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useState} from "react";
import "../../styles/contact.css"

export default function GoogleMap () {
    const position = {lat: 53.54, lng:10};

    return(
        <APIProvider apiKey="AIzaSyC8YTSMjXUs_hBcE9l4OqUG2Tsm_JuFzWY">
            <div className="contact-map">
                <Map zoom={9} center={position} style={{position:"relative"}}>
                    <AdvancedMarker position={position}>
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}