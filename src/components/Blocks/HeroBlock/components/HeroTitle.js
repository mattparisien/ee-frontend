import React from "react";
import Heading from "../../../Heading/Heading";
import SplitText from "../../../HOC/SplitText";

function HeroTitle({ title, subtitle }) {
	return (
		<div className='HeroBlock_Title flex-1 relative'>
			<Heading level={1} wrapperClasses='text-center md:text-left mb-2 md:mb-5'>
				<SplitText enterDelay={0.7}>{title}</SplitText>
			</Heading>
			<Heading level={3} wrapperClasses='inline relative'>
				<SplitText enterDelay={0.8}>{subtitle}</SplitText>
			</Heading>
		</div>
	);
}

export default HeroTitle;
