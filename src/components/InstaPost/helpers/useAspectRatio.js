import { useState, useEffect } from "react";

const useAspectRatio = url => {
	const [aspect, setAspect] = useState(null);

	useEffect(() => {
		if (url) {
			const img = new Image();
			img.onload = () => {
				const height = img.height;
				const width = img.width;
				const aspect = height / width;
				setAspect(aspect);
			};
			img.src = url;
		}
	}, [url]);

	return aspect;
};

export default useAspectRatio;
