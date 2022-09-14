import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MapMarker from "./MapMarker";

const containerStyle = {
	width: "100%",
	height: "400px",
};

const center = {
	lat: 50.0048,
	lng: 20.6154,
};

const MAP_API_KEY = process.env.REACT_APP_API_GOGLE_KEY;

const Maps = () => {
	const [zoom, setZoom] = useState(15);

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: `${MAP_API_KEY}`,
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		// const bounds = new window.google.maps.LatLngBounds(center);
		// map.fitBounds(bounds);
		map.setZoom(zoom);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onLoad={onLoad} onUnmount={onUnmount}>
			<MapMarker setZoom={setZoom} />
		</GoogleMap>
	) : (
		<></>
	);
};

export default React.memo(Maps);
