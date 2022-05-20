import React from "react";
import classNames from "classnames";

function CarouselButton({ onClick, component, isPrev }) {
	return (
		<button
			className={
				"CarouselButton  px-4 flex items-center justify-center bg-dark text-light rounded-3xl last:ml-2 cursor-pointer"
			}
			onClick={onClick}
		>
			{React.createElement(component, {
				className: isPrev ? "rotate-180 w-5" : "w-5",
			})}
		</button>
	);
}

export default CarouselButton;
