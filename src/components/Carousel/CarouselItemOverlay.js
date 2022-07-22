import React from "react";

function CarouselItemOverlay({ Title, Subtitle, isVisible }) {
	return (
		<div className='CarouselItemOverlay absolute top-0 left-0 w-full h-full text-light'>
			<div
				className={`inner p-2 w-full h-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark after:transition-opacity after:ease after:duration-[400ms] after:z-1 ${
					isVisible ? "after:opacity-40" : "after:opacity-0"
				}`}
			>
				<p
					className={`text-2xl font-walsheim font-medium z-50 absolute left-0 top-0 p-4 translate-y-${
						isVisible ? "0" : "full"
					} opacity-${
						isVisible ? 1 : 0
					} transition duration-[600ms] ease-[cubic-bezier(.215,.61,.355,1)]`}
				>
					{Title}
				</p>
				<p
					className={`text-2xl text-right font-walsheim font-medium z-50 absolute bottom-0 right-0 p-4 translate-y-${
						isVisible ? "0" : "full"
					} opacity-${
						isVisible ? 1 : 0
					} transition duration-[600ms] ease-[cubic-bezier(.215,.61,.355,1)] delay-[60ms]`}
				>
					{Subtitle}
				</p>
			</div>
		</div>
	);
}

export default CarouselItemOverlay;
