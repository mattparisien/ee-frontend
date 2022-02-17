import { useState, useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useResize from "./useResize";
import { split } from "lodash";
import $ from "jquery";

function useSplit(arrayOfElements, options) {
	const [splitText, setSplitText] = useState(null);
	const [splitCount, setSplitCount] = useState(0);
	const [isSplit, setIsSplit] = useState(false);
	const [chars, setChars] = useState(null);
	const [words, setWords] = useState(null);
	const [lines, setLines] = useState(null);
	const [windowWidth] = useResize();
	const [windowWidthChanged, setWindowWidthChanged] = useState(false);

	useEffect(() => {
		gsap.registerPlugin(SplitText);

		console.log(arrayOfElements)

		if (!arrayOfElements || !arrayOfElements[0]) {
			console.log('in herwss!s')
			return;
		}

		if (arrayOfElements.length >= 0 && !isSplit) {
			console.log(arrayOfElements)
			const mySplitText = new SplitText(arrayOfElements, options);
			
			setIsSplit(true);
			setSplitText(mySplitText);
			setSplitCount(1);
			mySplitText.chars && setChars(mySplitText.chars);
			mySplitText.words && setWords(mySplitText.words);
			mySplitText.lines && setLines(mySplitText.lines);

		}
	}, [arrayOfElements]);

	useEffect(() => {
		if (splitText) {
			setSplitText(splitText.revert().split());
			$(splitText.lines).wrap('<div class="line-wrapper"></div>');
			setSplitCount(prev => prev + 1);
		}
	}, [windowWidth]);

	return [isSplit, chars, splitCount, words, lines];
}
export default useSplit;
