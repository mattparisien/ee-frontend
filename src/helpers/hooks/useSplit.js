import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useResize from "./useResize";

function useSplit(paragraphs) {
	gsap.registerPlugin(SplitText);

	const [isSplit, setSplit] = useState(false);
	const [isResized, windowWidth] = useResize();
	const [elements, setElements] = useState(null);

	let hasSet = false;

	useEffect(() => {
		if (paragraphs.length && !isSplit) {
			paragraphs.forEach(paragraph => {
        
				const mySplitText = new SplitText(paragraph, { type: "lines" });
        console.log(mySplitText)
			});

			setSplit(true);
		}
	}, [paragraphs]);


  return isSplit;

}

export default useSplit;
