import React, { useEffect, useState } from "react";
import { API_KEY } from "../constants";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

export function RecenterComponent({position}) {

    const map = useMap();

    useEffect(() => {
        map.setView(position);
    }, [position])

    return null;
}

export default function MapComponent() {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((latlng) => {
            setLoading(false);
            setPosition([latlng.coords.latitude, latlng.coords.longitude]);
        })
    }, [loading])

    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={false} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>

            </Marker>

            <RecenterComponent position={position}/>
        </MapContainer>
    )
}


