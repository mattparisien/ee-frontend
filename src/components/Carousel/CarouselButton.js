import React from "react";
import classNames from "classnames";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useMouseEnter from "../../helpers/hooks/useMouseEnter";

function CarouselButton({ onClick, isPrev, isVisible }) {
	const { ref, isEnter } = useMouseEnter();

	const arrowEase = "cubic-bezier(.215,.61,.355,1)";

	const classes = classNames(
		"CarouselButton h-full block p-4 flex items-center justify-center text-light rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 z-50 overflow-hidden transition-opacity duration-[300ms] ease",
		{
			"right-0 mr-2 md:mr-4": !isPrev,
			"left-0 ml-2 md:ml-4": isPrev,
			"md:opacity-0": !isVisible,
			"md:opacity-100": isVisible,
		}
	);

	const arrowDefaultClasses = classNames(
		`w-5 h-5 md:w-7 md:h-7 absolute transition transition-transform ease-${arrowEase} duration-[800ms]`,
		{
			[`${
				isEnter ? "rotate-180 -translate-x-10" : "rotate-180 translate-x-0"
			}`]: isPrev,
			[`${isEnter ? "translate-x-10" : "translate-x-0"}`]: !isPrev,
		}
	);

	const arrowHoverClasses = classNames(
		`w-5 h-5 md:w-7 md:h-7 transition transition-transform ease-${arrowEase} duration-[600ms] delay-100`,
		{
			[`rotate-180 ${isEnter ? "translate-x-0" : "translate-x-10"}`]: isPrev,
			[`${isEnter ? "translate-x-0 " : "-translate-x-10"}`]: !isPrev,
		}
	);

	return (
		<button className={classes} onClick={onClick} ref={ref}>
			<ArrowForwardIcon className={arrowDefaultClasses} />
			<ArrowForwardIcon className={arrowHoverClasses} />
		</button>
	);
}

export default CarouselButton;
