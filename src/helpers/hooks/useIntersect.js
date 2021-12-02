import React, { useState, useEffect } from "react";

export default function useIntersect(refs, options) {
	const [isIntersect, setIntersect] = useState(false);

	const handleIntersect = entries => {
    console.log('hi')
		entries.forEach(entry => {
  
			setIntersect(entry.isIntersecting);
		});
	};

	useEffect(() => {
    
		const observer = new IntersectionObserver(handleIntersect, options);
    
		if (refs.current.length >= 1) {
      
			refs.current.forEach(el => {
				observer.observe(el);
			});
		}
	}, []);

	return { isIntersect };
}
