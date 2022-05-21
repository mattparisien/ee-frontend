import React from "react";
import Heading from "../../../Heading/Heading";
import ScrollDownCta from "./ScrollDownCta";
import SplitText from "../../../HOC/SplitText";

function HeroTitle({ title, subtitle }) {
	return (
		<div className='HeroBlock_Title flex-1 relative'>
			<Heading level={1}>
				<SplitText enterDelay={0.7}>{title}</SplitText>
			</Heading>
			<Heading level={3} wrapperClasses='inline relative'>
				<SplitText enterDelay={0.8}>{subtitle}</SplitText>

				<ScrollDownCta />
			</Heading>
		</div>
	);
}

export default HeroTitle;
