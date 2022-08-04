import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "./Map.css";

const Map = () => {

    return (
        <div className='mt-36  px-5 bg-gray-100 '>
            <div className='pb-10 pt-5'>
                <p className='font-bold ml-3 mb-5'>Apple Store, 112 Prince St New York,
                    NY 10012, United States 80361,
                    United States</p>

                <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;