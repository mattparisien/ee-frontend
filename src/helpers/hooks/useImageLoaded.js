import { useState, useRef, useEffect } from "react";

const useImageLoaded = () => {
	const [loaded, setLoaded] = useState(false);
	const ref = useRef(null);

  console.log(ref)

	const onLoad = () => {
		setLoaded(true);
	};

	useEffect(() => {
		if (ref.current && ref.current.complete) {
			onLoad();
		}
	}, [ref.current]);

	return { ref, loaded };
};

export default useImageLoaded;
