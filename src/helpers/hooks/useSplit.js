import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useResize from "./useResize";

function useSplit(arrayOfElements) {
	const [isSplit, setIsSplit] = useState(false);
	const [chars, setChars] = useState(null);
	useEffect(() => {
		gsap.registerPlugin(SplitText);

		if (arrayOfElements.length > 0 && !isSplit) {
			
			const mySplitText = new SplitText(arrayOfElements, {
				type: "lines, chars",
				charsClass: "char",
				linesClass: "line",
			});
			setIsSplit(true);
			setChars(mySplitText.chars);
		}
	}, [arrayOfElements]);

	return [isSplit, chars];
}
export default useSplit;
