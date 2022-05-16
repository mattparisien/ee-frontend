import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

function useCurrentLocation() {
	const location = useLocation();
	const [currentLocation, setCurrentLocation] = useState(location);

	useEffect(() => {
		location !== currentLocation && setCurrentLocation(location);
	}, [location]);

	return location
}

export default useCurrentLocation;
