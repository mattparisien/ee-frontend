import { useState } from "react";

const useImageOnLoad = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageOnLoad = () => {
		setIsLoaded(true);
	};

	return { handleImageOnLoad, isLoaded };
};

export default useImageOnLoad;
