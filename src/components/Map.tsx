'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Map() {
    useEffect(() => {
        delete(L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x.src,
            iconUrl: markerIcon.src,
            shadowUrl: markerShadow.src,
        });
    }, []);

    const position: [number, number] = [28.6139, 77.2090]; // Center of Delhi Taken as ref

    return (
        <div className="w-full h-screen relative">
            <MapContainer
                center = {position}
                zoom = {14}
                scrollWheelZoom = {true}
                className = "w-full h- full z-0"
            >
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position = {position}>
                    <Popup>
                        <strong>LitRoute. Nav</strong> <br />
                        Monitoring safe paths and nearby active routes for safer navigation.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}