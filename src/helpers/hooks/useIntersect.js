import React, { useState, useEffect } from "react";

export default function useIntersect(refs, options) {
	const [isIntersect, setIntersect] = useState(false);
	const [target, setTarget] = useState(null);

	const handleIntersect = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setIntersect(true)
			}

			if (entry.isIntersecting) {
				setTarget(entry.target);
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersect, options);

		if (refs.current.length >= 1) {
			refs.current.forEach(el => {
				observer.observe(el);
			});
		}

		return () => {
			if (refs.current.length >= 1) {
				refs.current.forEach(el => {
					observer.unobserve(el);
				});
			}
		}
	});

	return [isIntersect, target];
}
