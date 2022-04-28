//Resolves media returned from async request
import { useState, useEffect } from "react";

const useMedia = promise => {
	const [media, setMedia] = useState(null);

	useEffect(() => {
		console.log('the promise')
		if (promise) {
			promise.then(info => {
				
				return setMedia({
					...info.data,
				});
			});
		}
	}, [promise]);

	return media;
};

export default useMedia;
