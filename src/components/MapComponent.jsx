import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet's default icon path issues with webpack
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.pnghttps://cdn-icons-png.flaticon.com/512/25/25613.png',
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
  shadowUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
});

function MapComponent({ address }) {
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (address) {
      setIsLoading(true);
      // Use OpenStreetMap Nominatim API for geocoding
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching location:', error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [address]);

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{address || 'Selected location'}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;

