import { useEffect, useState } from "react";
import { aspects } from "../../components/Media/Media";

const useMediaRatio = (width, height) => {
	const [ratio, setRatio] = useState(null);

	useEffect(() => {
		if (!width || !height) {
			throw new Error(
				"useMediaRatio: Image width or height is null, must provide both"
			);
		}

		const ratio = height / width;

		console.log(aspects, ratio);

		if (ratio >= aspects["portrait"] || ratio >= aspects["square"]) {
			console.log("should be in here");
			setRatio("portrait");
		} else if (ratio <= aspects["square"] && ratio >= aspects["landscape"]) {
			setRatio("square");
		} else {
			setRatio("landscape");
		}
	}, [width, height]);

	return ratio;
};

export default useMediaRatio;
