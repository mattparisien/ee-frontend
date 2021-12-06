import React, { useEffect, useState } from "react";

export default function changeHeaderColor(sectionRefs, headerRef) {
	
	const [theme, setTheme] = useState(null);

	sectionRefs.current.forEach((section) => {
		console.log(section)
	}) 
}