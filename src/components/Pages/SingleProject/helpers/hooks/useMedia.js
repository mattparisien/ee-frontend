//Resolves media returned from async request
import { useState, useEffect } from "react";

const useMedia = promise => {
	const [media, setMedia] = useState(null);

	useEffect(() => {
		if (promise) {
			promise.then(info => {
				return setMedia({
					type: info.type,
					data: !Array.isArray(info.data)
						? {
								url: info.data.url,
								alt: info.data.alt,
						  }
						: info.data,
				});
			});
		}
	}, [promise]);


	useEffect(() => {
		console.log(media)
	}, [media])

	return media;
};

export default useMedia;
