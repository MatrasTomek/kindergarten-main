import React from "react";
import { Marker } from "@react-google-maps/api";

// const MapMarker = React.forwardRef((props, ref) => {

const MapMarker = () => {
	const handleOnClickMarker = () => {};

	const position = { lat: 50.00481, lng: 20.61541 };

	// Note below
	return (
		<Marker
			position={position}
			// title={title}
			// ref={ref}
			onClick={handleOnClickMarker}
			icon={{
				// url: "/icons/map-icon-green.svg",
				anchor: new window.google.maps.Point(32, 32),
				scaledSize: new window.google.maps.Size(62, 79),
			}}
		/>
	);
};

export default React.memo(MapMarker);

// Note if you are using class base component then you can forwardRef like
// export default React.forwardRef((props, ref) => <MapMarker innerRef={ref} {...props} />);
