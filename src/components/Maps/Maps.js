import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
	iconUrl: '/images/przedszkole_state.jpg',
	iconSize: [64, 40],
	iconAnchor: [16, 40],
	popupAnchor: [0, -35],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
});

const position = [50.0048, 20.6154];

const Maps = () => (
	<MapContainer center={position} zoom={22} style={{ height: '400px', width: '100%' }}>
		<TileLayer
			attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={position} icon={customIcon}>
			<Popup>Tutaj jesteśmy!</Popup>
		</Marker>
	</MapContainer>
);

export default React.memo(Maps);
