import React from "react";
import Heading from "../../../Heading/Heading";
import SplitText from "../../../HOC/SplitText";
import ScrollDownCta from "./ScrollDownCta";

function HeroTitle({ title, subtitle }) {
	return (
		<div className='HeroBlock_Title flex-1 relative'>
			<Heading level={1}>
				{/* <SplitText enterDelay={0.7}></SplitText> */}
				{title}
			</Heading>
			<Heading level={3} wrapperClasses='inline relative'>
				{/* <SplitText enterDelay={0.8}></SplitText> */}
				{subtitle}
				<ScrollDownCta />
			</Heading>
		</div>
	);
}

export default HeroTitle;
