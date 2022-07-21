import { useEffect, useRef, useState } from "react";

function useInView(options) {
	const [inView, setInView] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			const handleIntersection = entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setInView(true);
						observer.unobserve(entry.target);
					}
				});
			};

			const defaultOptions = {
				threshold: 0.1,
			};

			const observer = new IntersectionObserver(
				handleIntersection,
				options || defaultOptions
			);
			observer.observe(ref.current);
		}
	}, [ref.current]);

	return { ref, inView };
}

export default useInView;
