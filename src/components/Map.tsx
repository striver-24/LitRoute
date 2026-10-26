'use client'

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Helper component to recenter map when user position changes
function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);
  return null;
}

export default function Map() {
  // Default fallback position (Delhi)
  const [position, setPosition] = useState<[number, number]>([28.6139, 77.2090]);
  const [loadingLocation, setLoadingLocation] = useState<boolean>(true);

  useEffect(() => {
    // Fix leaflet marker icons via CDN
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    // Fetch user's live GPS location on load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoadingLocation(false);
        },
        (err) => {
          console.warn("Geolocation permission denied or error. Using default location.");
          setLoadingLocation(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setLoadingLocation(false);
    }
  }, []);

  return (
    <div className="w-full h-screen absolute inset-0 z-0">
      {loadingLocation && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-40 bg-slate-800 text-white px-4 py-2 rounded-full shadow-lg text-xs font-semibold animate-pulse">
          📍 Locating your position for safe navigation...
        </div>
      )}

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <MapController center={position} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>LitRoute Active</strong> <br />
            You are here. Monitoring safe routes nearby.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}