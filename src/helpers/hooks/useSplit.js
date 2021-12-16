import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useResize from "./useResize";

function useSplit(paragraphs) {
	const [isSplit, setSplit] = useState(false);
	const mySplitText = useRef([]);
	mySplitText.current = paragraphs;
	
	

}
export default useSplit;
