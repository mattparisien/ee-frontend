import React from "react";
import TextMarquee from "../../templates/projects/single/components/TextMarquee";

function MarqueeHeading() {
	return (
		<div className='absolute top-0 left-0 w-full py-20'>
			<TextMarquee
				words={[
					"Contact us",
					"/",
					"Contact us",
					"/",
					"Contact us",
					"/",
					"Contact us",
					"/",
				]}
				textColor='light'
			/>
		</div>
	);
}

export default MarqueeHeading;
