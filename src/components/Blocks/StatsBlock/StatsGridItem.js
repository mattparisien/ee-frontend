import React from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";

function StatsGridItem({ heading, description, index }) {
	return (
		<div className={`StatsGridItem  ${index !== 0 ? "ml-5 mt-7 md:mt-0" : ""}`}>
			<Heading level={2} wrapperClasses='w-full text-center'>
				{heading}
			</Heading>
			<Paragraph size='small' textCenter>
				{description}
			</Paragraph>
		</div>
	);
}

export default StatsGridItem;
