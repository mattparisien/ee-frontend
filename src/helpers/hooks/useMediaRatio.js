import { useEffect, useState } from "react";
import { aspects } from "../../components/Media/Media";

const useMediaRatio = (width, height) => {
	const [ratio, setRatio] = useState(null);

	useEffect(() => {
		const ratio = height / width;

		if (ratio >= aspects["portrait"] || ratio > aspects["square"]) {
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
