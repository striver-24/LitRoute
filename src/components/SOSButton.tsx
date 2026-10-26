'use client'

import React from 'react';

export default function SOSButton() {
    const handleSOS = (): void => {
        if (typeof window !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const lat: number = position.coords.latitude;
                    const lng: number = position.coords.longitude;
                    const mapsUrl: string = `https://www.google.com/maps?q=${lat},${lng}`;
                    const message: string = encodeURIComponent(`EMERGENCY! I feel unsafe. Track my live location here: ${mapsUrl}`);
                    window.open(`https://wa.me/?text=${message}`, '_blank');
                },
                (error: GeolocationPositionError) => {
                    alert('Unable to retrieve your location please ensure location services are enabled');
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    return(
        <button
            onClick={handleSOS}
            className="fixed botton-8 right-8 z-50 bg-red-600 hover:bg-red-800 text-white font-bold py-4 py-8 rounded-full shadow-2xl flex items-center gap-3 transition-tranform transform hover:scale-105 animate-pulse"
        >
            <span className = "text-xl">🚨</span> SOS Emergency
        </button>
    );
}