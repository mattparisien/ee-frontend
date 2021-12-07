import React, { useState } from "react";

import { useEffect } from "react/cjs/react.development";

export default function useResize() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = function (e) {
			const innerWidth = window.innerWidth;
			setWindowWidth(innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return [windowWidth];
}
